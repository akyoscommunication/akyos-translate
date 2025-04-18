<?php

namespace AkyosTranslate\Service;

use AkyosTranslate\Attribute\Hook;
use AkyosTranslate\Trait\RedirectTrait;
use DeepL\DeepLException;

class PolylangService
{
	use RedirectTrait;

	public function __construct(
		private readonly DeeplService             $deeplService,
		private readonly ContentTranslatorService $contentTranslator,
	)
	{
	}

	public function getLanguages(): array
	{

		if (function_exists('pll_the_languages')) {
			return pll_the_languages([
				'raw' => 1,
				'hide_if_empty' => 0
			]);
		}

		return [];
	}

	public function getPagesByLanguage(): array
	{
		$pages = [];

		$pagesFR = get_posts([
			'post_type' => 'page',
			'posts_per_page' => -1,
			'lang' => 'fr',
		]);

		foreach ($pagesFR as $page) {
			$pages[$page->ID] = [
				'fr' => [
					'id' => $page->ID,
					'title' => $page->post_title,
					'url' => get_permalink($page->ID),
				]
			];

			foreach ($this->getLanguages() as $language) {
				if (($language['slug'] !== 'fr') && pll_get_post($page->ID, $language['slug'])) {
					$pages[$page->ID][$language['slug']] = [
						'id' => pll_get_post($page->ID, $language['slug']),
						'title' => get_the_title(pll_get_post($page->ID, $language['slug'])),
						'url' => get_permalink(pll_get_post($page->ID, $language['slug'])),
					];
				}
			}

			if (count($pages[$page->ID]) === count($this->getLanguages())) {
				$pages[$page->ID]['all_translated'] = true;
			} else {
				$pages[$page->ID]['all_translated'] = false;
			}
		}

		return $pages;
	}

	/**
	 * @throws DeepLException
	 */
	#[Hook('admin_post_akyos_translate_translate_single_page')]
	public function translateSinglePage(): bool
	{
		if (isset($_POST['page_id'])) {

			//get page object
			$page = get_post($_POST['page_id']);
			$translations['fr'] = $page->ID;

			//duplicate page and assign to other languages
			foreach ($this->getLanguages() as $language) {
				if ($language['slug'] !== 'fr') {
					$translatedPageId = pll_get_post($page->ID, $language['slug']);

					if (!$translatedPageId) {

						//here translate by api Deepl title and content
						$pageTitleTranslated = $this->deeplService->translate(['post_title' => $page->post_title], 'fr', $language['slug']);
						$pageContentTranslated = $this->contentTranslator->openAiTranslateContent($page->post_content, 'fr', $language['slug']);

						$translatedPage = array_merge(
							$pageTitleTranslated,
							[
								'post_content' => $pageContentTranslated,
								'post_type' => 'page',
								'post_status' => 'publish',
								'post_author' => get_current_user_id(),
							]
						);

						$newPage = wp_insert_post($translatedPage);

						if (!is_wp_error($newPage)) {
							pll_set_post_language($newPage, $language['slug']);

							$translations[$language['slug']] = $newPage;
						}
					} else {
						$translations[$language['slug']] = $translatedPageId;
					}
				}
			}

			if ($_POST['all_translated'] !== '1') {
				pll_save_post_translations($translations);
			}
		}

		return $this->redirectToRoute(AKYOS_BASE_PLUGIN_NAME.'-page');
	}
}
