<?php

namespace AkyosTranslate\Service;

use DeepL\DeepLException;
use DeepL\TextResult;
use DeepL\Translator;

class DeeplService
{

	public string $authKey;

	public function __construct()
	{
		$this->authKey = getenv('DEEPL_AUTH_KEY');
	}

	/**
	 * @throws DeepLException
	 */
	public function translate(string|array $texts, string $currentLanguage, string $targetLanguage): array|string
	{
		if (is_array($texts)) {
			$toTranslates = array_values($texts);
		} else {
			$toTranslates = $texts;
		}


		$translator = new Translator($this->authKey);

		/** @var TextResult $result */
		$result = $translator->translateText($toTranslates, $currentLanguage, $this->checkLanguageCode($targetLanguage));

		if ($result) {
			if (is_array($texts)) {
				$i = 0;
				foreach ($texts as $key => $text) {
					$texts[$key] = $result[$i]->text;
					$i++;
				}

				return $texts;
			}

			return $result->text;
		}

		return new \Exception('Translation failed');
	}

	public function checkLanguageCode(string $targetLanguage): string
	{
		if ($targetLanguage === 'en') {
			return 'en-GB';
		}

		return $targetLanguage;
	}
}
