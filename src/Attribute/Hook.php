<?php

namespace AkyosTranslate\Attribute;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD)]
class Hook
{
	public const string TYPE_ACTION = 'action';
	public const string TYPE_FILTER = 'filter';

	public function __construct(
		public ?string $hook = null,
		public ?string $type = self::TYPE_ACTION,
		public ?int    $priority = 10,
		public ?int    $accepted_args = 1,
	)
	{
	}
}
