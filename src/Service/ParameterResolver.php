<?php

namespace AkyosTranslate\Service;

use AkyosTranslate\Attribute\PostParam;
use ReflectionMethod;
use ReflectionNamedType;

class ParameterResolver
{
	public function resolveParameters(ReflectionMethod $method): array
	{
		$parameters = [];

		foreach ($method->getParameters() as $parameter) {
			$attributes = $parameter->getAttributes(PostParam::class);

			if (empty($attributes)) {
				continue;
			}

			/** @var PostParam $postParam */
			$postParam = $attributes[0]->newInstance();
			$value = $_POST[$parameter->name] ?? null;

			if ($postParam->required && $value === null) {
				throw new \InvalidArgumentException(
					sprintf('Le paramètre "%s" est requis', $postParam->name)
				);
			}

			if ($parameter->getType() instanceof ReflectionNamedType) {
				$value = $this->convertType($value, $parameter->getType()->getName());
			}

			$parameters[] = $value;
		}

		return $parameters;
	}

	private function convertType(mixed $value, string $type)
	{
		if ($value === null) {
			return null;
		}

		return match ($type) {
			'int' => (int)$value,
			'float' => (float)$value,
			'bool' => (bool)$value,
			'string' => (string)$value,
			'array' => is_array($value) ? $value : [$value],
			default => $value,
		};
	}
}
