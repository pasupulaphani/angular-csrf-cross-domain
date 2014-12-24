// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('csrf-cross-domain.config', [])
    .value('csrf-cross-domain.config', {
        debug: true
    });

// Modules
angular.module('csrf-cross-domain.services', []);
angular.module('csrf-cross-domain',
    [
        'csrf-cross-domain.config',
        'csrf-cross-domain.services',
        'ngCookies'
    ]);
