let mix = require('laravel-mix');

mix
	.js('assets/js/app.js', 'dist/js')
	.sass('assets/css/main.scss', 'dist/css')
