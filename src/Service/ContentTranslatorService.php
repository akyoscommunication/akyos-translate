<?php

namespace AkyosTranslate\Service;

use DeepL\DeepLException;
use OpenAI\Client;

class ContentTranslatorService
{
	public string $openAiKey;


	public function __construct(
		private readonly DeeplService $deeplService,
	)
	{
		$this->openAiKey = getenv('OPENAI_API_KEY');
	}

	public function openAiTranslateContent($content, $currentLang, $targetLang): string
	{
		$client = \OpenAI::client($this->openAiKey);
		$result = $client->chat()->create([
			'model' => 'gpt-4o',
			'messages' => [
				[
					'role' => 'user',
					'content' => "
You are a translation assistant.

Take the following WordPress block HTML content and translate ONLY the visible text that users can read on the site (e.g., text in <p>, <a>, <h1>, etc.), from {$currentLang} to {$targetLang}.
  
Strictly preserve:
- The entire HTML structure (tags, comments, and formatting).
- Any URLs, image paths, or class names—which should not be altered.

DO NOT include any additional tags, such as ```html or ```. Only return the pure HTML content as output.

Here is the content to translate:
{$content}
"

				]
			]
		]);

		$translatedContent = $result['choices'][0]['message']['content'];
		$translatedContent = preg_replace('/^```html\s*/', '', $translatedContent);
		$translatedContent = preg_replace('/\s*```$/', '', $translatedContent);


		return $result['choices'][0]['message']['content'];
	}
}
