<?php

namespace AkyosTranslate\Class;

use AkyosTranslate\Twig\PluginExtension;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

abstract class AbstractController
{
	private Environment $twig;

	public function __construct()
	{
		$loader = new FilesystemLoader(plugin_dir_path(__DIR__).'../templates');
		$this->twig = new Environment($loader);
		$this->twig->addExtension(new PluginExtension());

	}

	protected function render(string $template, array $data = []): void
	{
		echo $this->twig->render($template, $data);
	}

	protected function renderView(string $template, array $data = []): string
	{
		return $this->twig->render($template, $data);
	}
}
