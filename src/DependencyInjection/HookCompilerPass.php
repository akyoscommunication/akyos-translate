<?php

namespace AkyosTranslate\DependencyInjection;

use AkyosTranslate\Attribute\Hook;
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
		// Parcourir tous les services définis dans le conteneur qui étendent de AbstractController
		foreach ($container->getDefinitions() as $definition) {
			$class = $definition->getClass();

			if (!$class || !class_exists($class, false)) {
				continue;
			}

			$reflectionClass = new ReflectionClass($class);
			$methods = array_filter($reflectionClass->getMethods(), function(ReflectionMethod $method) {
				return !empty($method->getAttributes(Hook::class));
			});

			foreach($methods as $method) {
				$attributes = $method->getAttributes(Hook::class);

				foreach ($attributes as $attribute) {
					/** @var Hook $hookAttr */
					$hookAttr = $attribute->newInstance();

					if($hookAttr->type === Hook::TYPE_ACTION) {
						add_action( $hookAttr->hook, function() use ($hookAttr, $container, $class, $method) {
							$controller = $container->get($class);
							$methodName = $method->name;
							$controller->$methodName();
						}, $hookAttr->priority, $hookAttr->accepted_args);
					}

					if($hookAttr->type === Hook::TYPE_FILTER) {
						add_filter( $hookAttr->hook, function() use ($hookAttr, $container, $class, $method) {
							$controller = $container->get($class);
							$methodName = $method->name;
							$controller->$methodName();
						}, $hookAttr->priority, $hookAttr->accepted_args);
					}
				}
			}
		}
	}
}
