<?php

namespace AkyosTranslate\Controller;

use AkyosTranslate\Attribute\AdminRoute;
use AkyosTranslate\Class\AbstractController;
use AkyosTranslate\Service\CheckPluginService;
use AkyosTranslate\Service\PolylangService;

class DashboardController extends AbstractController
{
	public function __construct(
		private readonly CheckPluginService $checkPluginService,
		private readonly PolylangService    $polylangService,
	)
	{
		parent::__construct();
	}

	#[AdminRoute(type: AdminRoute::TYPE_MENU_PAGE, pageTitle: 'Akyos Translate', menuTitle: 'Akyos Traduction', capability: 'manage_options', slug: AKYOS_BASE_PLUGIN_NAME, iconUrl: '', position: 99)]
	public function index(): void
	{
		$this->render('akyos-translate-infos.html.twig', [
			'title' => 'Akyos Translate',
			'content' => 'Informations générales',
			'languages' => $this->polylangService->getLanguages(),
		]);
	}

	#[AdminRoute(type: AdminRoute::TYPE_SUBMENU_PAGE, pageTitle: 'Traduction page', menuTitle: 'Traduction page', capability: 'manage_options', slug: AKYOS_BASE_PLUGIN_NAME.'-page', parentSlug: AKYOS_BASE_PLUGIN_NAME, iconUrl: '', position: 99)]
	public function page()
	{
		$this->render('akyos-translate-page.html.twig', [
			'title' => 'Traduction page',
			'content' => 'Traduction page',
			'hasPolylang' => $this->checkPluginService->hasPolylangActivated(),
			'languages' => $this->polylangService->getLanguages(),
			'pagesByLanguage' => $this->polylangService->getPagesByLanguage(),
		]);
	}

	#[AdminRoute(type: AdminRoute::TYPE_SUBMENU_PAGE, pageTitle: 'Traduction Mots', menuTitle: 'Traduction Mots', capability: 'manage_options', slug: AKYOS_BASE_PLUGIN_NAME.'-words', parentSlug: AKYOS_BASE_PLUGIN_NAME, iconUrl: '', position: 99)]
	public function words()
	{
		$this->render('akyos-translate-words.html.twig', [
			'title' => 'Traduction Mots',
			'content' => 'Traduction Mots',
			'words' => $this->polylangService->getWords(),
			'languages' => $this->polylangService->getLanguages(),
			'hasPolylang' => $this->checkPluginService->hasPolylangActivated(),
		]);
	}
}
