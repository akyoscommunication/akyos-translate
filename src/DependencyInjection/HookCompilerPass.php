<?php

namespace AkyosTranslate\DependencyInjection;

use AkyosTranslate\Attribute\Hook;
use AkyosTranslate\Service\ParameterResolver;
use ReflectionClass;
use ReflectionException;
use ReflectionMethod;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class HookCompilerPass implements CompilerPassInterface
{
	/**
	 * @throws ReflectionException
	 */
	public function process(ContainerBuilder $container): void
	{
		$parameterResolver = new ParameterResolver();
		// Parcourir tous les services définis dans le conteneur qui étendent de AbstractController
		foreach ($container->getDefinitions() as $definition) {
			$class = $definition->getClass();

			if (!$class || !class_exists($class, false)) {
				continue;
			}

			$reflectionClass = new ReflectionClass($class);
			$methods = array_filter($reflectionClass->getMethods(), function (ReflectionMethod $method) {
				return !empty($method->getAttributes(Hook::class));
			});

			foreach ($methods as $method) {
				$attributes = $method->getAttributes(Hook::class);

				foreach ($attributes as $attribute) {
					/** @var Hook $hookAttr */
					$hookAttr = $attribute->newInstance();

					if ($hookAttr->type === Hook::TYPE_ACTION) {
						add_action($hookAttr->hook, function () use ($hookAttr, $container, $class, $method, $parameterResolver) {
							$controller = $container->get($class);

							try {
								if ($_SERVER['REQUEST_METHOD'] === 'POST') {
									$parameters = $parameterResolver->resolveParameters($method);
									return $method->invokeArgs($controller, $parameters);
								}

								// Si ce n'est pas un POST, on passe les arguments WordPress normalement
								return $method->invokeArgs($controller, func_get_args());
							} catch (\Exception $e) {
								// Log l'erreur ou gérez-la comme vous le souhaitez
								error_log('Erreur dans HookCompilerPass: '.$e->getMessage());
								// Vous pouvez rediriger vers une page d'erreur ou retourner une valeur par défaut
								return null;
							}

						}, $hookAttr->priority, $hookAttr->accepted_args);
					}

					if ($hookAttr->type === Hook::TYPE_FILTER) {
						add_filter($hookAttr->hook, function () use ($hookAttr, $container, $class, $method, $parameterResolver) {
							$controller = $container->get($class);

							try {
								if ($_SERVER['REQUEST_METHOD'] === 'POST') {
									$parameters = $parameterResolver->resolveParameters($method);
									return $method->invokeArgs($controller, $parameters);
								}

								// Si ce n'est pas un POST, on passe les arguments WordPress normalement
								return $method->invokeArgs($controller, $args);
							} catch (\Exception $e) {
								// Log l'erreur ou gérez-la comme vous le souhaitez
								error_log('Erreur dans HookCompilerPass: '.$e->getMessage());
								// Vous pouvez rediriger vers une page d'erreur ou retourner une valeur par défaut
								return null;
							}

						}, $hookAttr->priority, $hookAttr->accepted_args);
					}
				}
			}
		}
	}
}
