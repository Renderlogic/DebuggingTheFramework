const mix = require('laravel-mix');

/**
 * Public Arena
 */


mix.js([
    'resources/js/public/public-vue-base.js',
    'resources/js/public/public-custom.js',
    'resources/js/public/public-document-ready.js'
], 'resources/js/public/staging/app.public.js');

/* compile/mix from css resources */
mix.styles([
    'resources/css/public/public-general.css',
    'resources/css/public/login-modal.css'
], 'resources/css/public/staging/app.public.css');

/* compile/mix from sass css resources */
mix.sass('resources/sass/public/base.scss', 'resources/sass/public/staging');

/* compile/mix sass & css resources */
mix.styles([
    'resources/css/public/staging/app.public.css',
    'resources/sass/public/staging/base.css'
], 'resources/css/public/staging/app.public.css');

/**
 * Private Arena 
 * 
 */

mix.js([
    'resources/js/private/private-vue-base.js',
    'resources/js/private/private-custom.js',
    'resources/js/private/private-document-ready.js'
], 'resources/js/private/staging/app.private.js');

/* compile/mix from css resources */
mix.styles([
    'resources/css/private/private-general.css'
], 'resources/css/private/staging/app.private.css');

/* compile/mix from sass css resources */
mix.sass('resources/sass/private/base.scss', 'resources/sass/private/staging');

/* compile/mix sass & css resources */
mix.styles([
    'resources/css/private/staging/app.private.css',
    'resources/sass/private/staging/base.css'
], 'resources/css/private/staging/app.private.css');


/**
 * Shared Arena 
 * 
 */

mix.js([
    'resources/js/shared/shared-vue-base.js',
    'resources/js/shared/shared-custom.js',
    'resources/js/shared/shared-document-ready.js'
], 'resources/js/shared/staging/app.shared.js');

/* compile/mix from css resources */
mix.styles([
    'resources/css/shared/footer.css',
    'resources/css/shared/shared-general.css'
], 'resources/css/shared/staging/app.shared.css');

/* compile/mix from sass css resources */
mix.sass('resources/sass/shared/base.scss', 'resources/sass/shared/staging');

/* compile/mix sass & css resources */
mix.styles([
    'resources/css/shared/staging/app.shared.css',
    'resources/sass/shared/staging/base.css'
], 'resources/css/shared/staging/app.shared.css');


/**
 * Post-Game Processing
 */
/* css */
mix.minify('resources/css/public/staging/app.public.css');
mix.minify('resources/css/private/staging/app.private.css');
mix.minify('resources/css/shared/staging/app.shared.css');
/* js */
mix.minify('resources/js/public/staging/app.public.js');
mix.minify('resources/js/private/staging/app.private.js');
mix.minify('resources/js/shared/staging/app.shared.js');


/**
 * Combine Public/Private CSS/JS with Shared Modules.
 * 
 */

mix.styles([
    'resources/css/shared/staging/app.shared.min.css',
    'resources/css/public/staging/app.public.min.css'
], 'resources/css/public/staging/app.public.min.css');

mix.styles([
    'resources/css/shared/staging/app.shared.min.css',
    'resources/css/private/staging/app.private.min.css'
], 'resources/css/private/staging/app.private.min.css');

mix.js([
    'resources/js/shared/staging/app.shared.min.js',
    'resources/js/public/staging/app.public.min.js'
], 'resources/js/public/staging/renderlogic.public.min.js');

mix.js([
    'resources/js/shared/staging/app.shared.min.js',
    'resources/js/private/staging/app.private.min.js'
], 'resources/js/private/staging/renderlogic.private.min.js');



/*
 * Deploy from resources to public 
 */
/* css */
mix.copy("resources/css/public/staging/app.public.min.css", "public/css/public/app.public.min.css");
mix.copy("resources/css/private/staging/app.private.min.css", "public/css/private/app.private.min.css");
mix.copy("resources/css/shared/staging/app.shared.min.css", "public/css/shared/app.shared.min.css");
/* js */
mix.copy("resources/js/public/staging/renderlogic.public.min.js", "public/js/public/renderlogic.public.min.js");
mix.copy("resources/js/private/staging/renderlogic.private.min.js", "public/js/private/renderlogic.private.min.js");
mix.copy("resources/js/shared/staging/app.shared.min.js", "public/js/shared/app.shared.min.js");

