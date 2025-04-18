<?php

/**
 * The plugin AkyosTranslate
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://akyos.com
 * @since             0.0.1
 * @package           AkyosTranslate
 *
 * @wordpress-plugin
 * Plugin Name:       Akyos Translate
 * Plugin URI:        https://github.com/akyoscommunication/base_wp_plugin.git
 * Description:       <strong>Akyos Translate</strong> 🚀 – Traduisez votre contenu WordPress avec l’aide d’OpenAI 🤖, en association avec Polylang 🏳️‍🌈. Simplifiez la gestion multilingue de votre site et optimisez votre SEO global ! 🎯
 * Version:           0.0.1
 * Author:            Akyos Communication <developpement@akyos.com>
 * Author URI:        https://akyos.com
 * Text Domain:       akyos-translate
 * Domain Path:       /languages
 */

use AkyosTranslate\AkyosTranslate;
use AkyosTranslate\Kernel;


require_once __DIR__.'/vendor/autoload.php';

const AKYOS_BASE_PLUGIN_VERSION = '0.0.1';
const AKYOS_BASE_PLUGIN_NAME = 'akyos-translate';

$kernel = new Kernel('dev', true);
$container = $kernel->boot();
$akyosBasePlugin = $container->get(AkyosTranslate::class);
