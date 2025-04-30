<?php

namespace AkyosTranslate;

use AkyosTranslate\Attribute\Hook;

readonly class AkyosTranslate
{
	public function __construct()
	{
		register_activation_hook(__FILE__, [$this, 'activate']);
		register_deactivation_hook(__FILE__, [$this, 'deactivate']);
	}

	public function activate()
	{
		// Add any activation code here
	}

	public function deactivate()
	{
		// Add any deactivation code here
	}

	#[Hook(hook: 'init')]
	public function init(): void
	{
		// If this file is called directly, abort.
		if (!defined('WPINC')) {
			die;
		}
	}

	#[Hook(hook: 'plugins_loaded')]
	public function loadPluginTextdomain(): void
	{
		load_plugin_textdomain(
			'akyos-translate',
			false,
			dirname(plugin_basename(__FILE__), 2).'/languages/'
		);
	}

	#[Hook(hook: 'plugin_action_links_akyos-translate/src/akyos-translate.php')]
	public function addActionLinks($links): array
	{
		/*
		*  Documentation : https://codex.wordpress.org/Plugin_API/Filter_Reference/plugin_action_links_(plugin_file_name)
		*/
		$settings_link = array(
			'<a href="'.admin_url('options-general.php?page='.AKYOS_BASE_PLUGIN_NAME).'">'.__('Settings', AKYOS_BASE_PLUGIN_NAME).'</a>',
		);

		return array_merge($settings_link, $links);
	}

	#[Hook(hook: 'admin_enqueue_scripts')]
	public function enqueueScripts(): void
	{
		wp_enqueue_style(AKYOS_BASE_PLUGIN_NAME, plugins_url().'/'.AKYOS_BASE_PLUGIN_NAME.'/dist/css/main.css', [], AKYOS_BASE_PLUGIN_NAME, false);
		wp_enqueue_script(AKYOS_BASE_PLUGIN_NAME, plugins_url().'/'.AKYOS_BASE_PLUGIN_NAME.'/dist/js/app.js', [], AKYOS_BASE_PLUGIN_NAME, false);

	}
}
