<?php

namespace AkyosTranslate\Attribute;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class AdminRoute
{
	public const string TYPE_MENU_PAGE = 'menu';
	public const string TYPE_SUBMENU_PAGE = 'submenu';

	public function __construct(
		public ?string $type = self::TYPE_MENU_PAGE,
		public ?string $pageTitle = 'Page Title',
		public ?string $menuTitle = 'Menu Title',
		public ?string $capability = 'manage_options',
		public ?string $slug = AKYOS_BASE_PLUGIN_NAME,
		public ?string $parentSlug = 'subpage_parent_slug',
		public ?string $iconUrl = 'dashicons-superhero',
		public ?int $position = 99
	) {
	}
}
