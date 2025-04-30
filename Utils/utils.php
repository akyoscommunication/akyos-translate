<?php
if (!defined('ABSPATH')) {
	exit;
}

if (!function_exists('aky_translate_pll__')) {
	function aky_translate_pll__(string $string): string
	{
		$stored_strings = get_option('aky_translations_strings', []);

		if (!in_array($string, $stored_strings)) {
			$stored_strings[] = $string;
			update_option('aky_translations_strings', $stored_strings);

			if (function_exists('pll_register_string')) {
				pll_register_string('Akyos Translate', $string, 'akyos-translate');
			}
		}

		if (function_exists('pll__')) {
			return pll__($string);
		}

		return $string;
	}
}

add_action('init', function () {
	if (function_exists('pll_register_string')) {
		$stored_strings = get_option('aky_translations_strings', []);
		foreach ($stored_strings as $string) {
			pll_register_string('Akyos Translate', $string, 'akyos-translate');
		}
	}
});

function aky_cleanup_unused_translations(): void
{
	delete_option('aky_translations_strings');
}

register_deactivation_hook(__FILE__, 'aky_cleanup_unused_translations');
