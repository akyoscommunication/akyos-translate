<?php

namespace AkyosTranslate\Attribute;

use Attribute;

#[Attribute(Attribute::TARGET_PARAMETER)]
class PostParam
{
	public function __construct(
		public ?string $name = null,
		public bool   $required = false,
	)
	{

	}
}
