<?php

namespace AkyosTranslate;

use AkyosTranslate\DependencyInjection\HookCompilerPass;
use AkyosTranslate\DependencyInjection\AdminRouteCompilerPass;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class Kernel
{
	private function getConfigDir(): string
	{
		return '../config';
	}

	public function boot(): ContainerInterface
	{
		$container = new ContainerBuilder();
		$loader = new YamlFileLoader($container, new FileLocator(__DIR__));

		// load services from the yaml file
		$loader->load($this->getConfigDir().'/services.yaml');

		// load Compiler Pass for attributes
		$container->addCompilerPass(new AdminRouteCompilerPass());
		$container->addCompilerPass(new HookCompilerPass());

		$container->compile();

		return $container;
	}
}
