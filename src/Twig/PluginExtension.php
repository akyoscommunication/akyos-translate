<?php

namespace AkyosTranslate\Twig;

use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;
use Twig\TwigFunction;

class PluginExtension extends AbstractExtension implements GlobalsInterface
{

	public function getGlobals(): array
	{
		return [
			'admin_url' => admin_url('admin-post.php'),
			'admin_ajax' => admin_url('admin-ajax.php'),
		];
	}

	public function getFunctions(): array
	{
		return [
			new TwigFunction('path', [$this, 'path']),
			new TwigFunction('dump', [$this, 'dump']),
			new TwigFunction('component', [$this, 'render']),
		];
	}

	public function path(string $path): string
	{
		return admin_url('admin.php').'?page='.$path;
	}

	public function dump($var): void
	{
		dump($var);
	}

	public function render(string $name, array $props = []): void
	{
		dump($name, $props);
	}
}
