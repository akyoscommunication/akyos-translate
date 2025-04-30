let mix = require('laravel-mix');

const stringWidth = require('string-width');
if (!stringWidth.default) {
	stringWidth.default = stringWidth;
}


mix
	.js('assets/js/app.js', 'dist/js')
	.sass('assets/css/main.scss', 'dist/css')
	.options({
		processCssUrls: false,
	});

if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps();
}
