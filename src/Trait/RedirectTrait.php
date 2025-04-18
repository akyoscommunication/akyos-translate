<?php

namespace AkyosTranslate\Trait;

trait RedirectTrait
{
	private string $redirectRoute;

	public function redirectToRoute(string $route): bool
	{
		return wp_redirect(admin_url('admin.php?page='.$route));
	}
}
