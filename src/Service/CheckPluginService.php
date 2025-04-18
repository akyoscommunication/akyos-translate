<?php

namespace AkyosTranslate\Service;

class CheckPluginService
{
	public function hasPolylangActivated(): bool
	{
		if (function_exists('pll_the_languages')) {
			return true;
		}

		return false;
	}
}
