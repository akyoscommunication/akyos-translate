<?php

namespace AkyosTranslate\Service;

use DeepL\DeepLException;
use OpenAI\Client;

class ContentTranslatorService
{
	public string $openAiKey;


	public function __construct()
	{
		$this->openAiKey = getenv('OPENAI_API_KEY');
	}

	public function openAiTranslateContent($content, $currentLang, $targetLang): string
	{
		set_time_limit(120);

		$client = \OpenAI::client($this->openAiKey);

		$prompt = "
Translate the following content from French to $targetLang while preserving all HTML and WordPress-specific escape characters (like \u003c, \u003e, \r\n, etc.). Do not remove or alter any of the structure or encoding. Only translate the visible French text. 

Content to translate:
$content
";
		try {
			$result = $client->chat()->create([
				'model' => 'gpt-4o',
				'messages' => [
					[
						'role' => 'user',
						'content' => $prompt
					]
				]
			]);
		} catch (\Exception $e) {
			// Handle the exception, e.g., log it or display an error message
			$result = null;
		}


		$translatedContent = $result['choices'][0]['message']['content'];

		return trim($translatedContent);
	}
}
