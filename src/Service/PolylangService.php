<?php

namespace AkyosTranslate\Service;

use AkyosTranslate\Attribute\Hook;
use AkyosTranslate\Attribute\PostParam;
use AkyosTranslate\Trait\RedirectTrait;
use DeepL\DeepLException;
use PLL_MO;

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
	public function translateSinglePage(
		#[PostParam('page_id')] int            $page_id,
		#[PostParam('is_all_translated')] bool $is_all_translated,
	): bool
	{
		//get page object
		$page = get_post($page_id);
		$translations['fr'] = $page->ID;

		//duplicate page and assign to other languages
		foreach ($this->getLanguages() as $language) {
			if ($language['slug'] !== 'fr') {
				$translatedPageId = pll_get_post($page->ID, $language['slug']);

				if (!$translatedPageId) {

					//here translate by api Deepl title and content
					$pageTitleTranslated = $this->deeplService->translate(['post_title' => $page->post_title], 'fr', $language['slug']);

					$pageContentTranslated = $this->contentTranslator->openAiTranslateContent($page->post_content, 'fr', $language['name']);

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

		if (!$is_all_translated) {
			pll_save_post_translations($translations);
		}

		return $this->redirectToRoute(AKYOS_BASE_PLUGIN_NAME.'-page');
	}

	/**
	 * @throws DeepLException
	 */
	#[Hook('admin_post_akyos_translate_translate_words')]
	public function translateWords(
		#[PostParam('original')] string|array $original,
	): bool
	{
		if (is_array($original)) {
			foreach ($original as $value) {
				$this->translator($value);
			}
		} else {
			$this->translator($original);
		}

		return $this->redirectToRoute(AKYOS_BASE_PLUGIN_NAME.'-words');
	}

	public function translator(string $original)
	{
		foreach ($this->getLanguages() as $language) {
			$term_lang = get_term_by('slug', $language['slug'], 'language');

			if (!$term_lang) {
				continue;
			}

			$term_meta = get_term_meta($term_lang->term_id, '_pll_strings_translations', true);

			$translation = $this->deeplService->translate($original, 'fr', $language['slug']);

			$exist = false;
			if (is_array($term_meta)) {
				foreach ($term_meta as $key => $meta) {
					if ($meta[0] === $original) {
						$exist = true;
						$term_meta[$key][1] = $translation;
					}
				}
			} else {
				$term_meta = [];
			}


			//if the string does not exist in the term meta, we add it
			if (!$exist) {
				$term_meta[] = [
					0 => $original,
					1 => $translation
				];
			}

			//update the term meta
			update_term_meta($term_lang->term_id, '_pll_strings_translations', $term_meta);
		}
	}

	public function getWords(): array
	{
		$translations = [];
		$stored_strings = get_option('aky_translations_strings', []);
		$languages = $this->getLanguages();

		foreach ($stored_strings as $string) {
			$translations[$string] = [
				'original' => $string,
			];

			foreach ($languages as $language) {
				if (function_exists('pll_translate_string')) {
					$translations[$string][$language['slug']] = pll_translate_string($string, $language['slug']);
				}
			}
		}

		return $translations;
	}
}
