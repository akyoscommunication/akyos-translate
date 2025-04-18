<?php

namespace AkyosTranslate\DependencyInjection;

use AkyosTranslate\Attribute\AdminRoute;
use ReflectionException;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use ReflectionClass;

class AdminRouteCompilerPass implements CompilerPassInterface
{
	/**
	 * @throws ReflectionException
	 */
	public function process(ContainerBuilder $container): void
	{
		// Parcourir tous les services définis dans le conteneur qui étendent de AbstractController
		$controllerDefinitions = array_filter($container->getDefinitions(), static function ($definition) {
			return str_starts_with($definition->getClass(), 'AkyosTranslate\\Controller');
		});
		$controllerDefinitions = array_filter($controllerDefinitions, static function ($key) {
			return str_starts_with($key, 'AkyosTranslate\\Controller');
		}, ARRAY_FILTER_USE_KEY);

		foreach ($controllerDefinitions as $definition) {
			$class = $definition->getClass();

			if (!$class || !class_exists($class, false)) {
				continue;
			}

			$reflectionClass = new ReflectionClass($class);
			$methods = $reflectionClass->getMethods();

			require_once ABSPATH.'wp-includes/pluggable.php';

			$user = wp_get_current_user();

			if ($user && $user->ID !== 0 && str_contains($user->data->user_email, 'akyos')) {
				foreach ($methods as $method) {
					$attributes = $method->getAttributes(AdminRoute::class);

					foreach ($attributes as $attribute) {
						/** @var AdminRoute $routeAttr */
						$routeAttr = $attribute->newInstance();

						add_action('admin_menu', function () use ($routeAttr, $container, $class, $method) {
							$controller = $container->get($class);

							if ($routeAttr->type === AdminRoute::TYPE_MENU_PAGE) {
								add_menu_page($routeAttr->pageTitle, $routeAttr->menuTitle, $routeAttr->capability, $routeAttr->slug, [$controller, $method->getName()], $routeAttr->iconUrl, $routeAttr->position);
							} else {
								add_submenu_page($routeAttr->parentSlug, $routeAttr->pageTitle, $routeAttr->menuTitle, $routeAttr->capability, $routeAttr->slug, [$controller, $method->getName()], $routeAttr->position);
							}
						});
					}
				}
			}
		}
	}
}
