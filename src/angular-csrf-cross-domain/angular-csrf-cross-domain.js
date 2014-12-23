// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angular-csrf-cross-domain.config', [])
    .value('angular-csrf-cross-domain.config', {
        debug: true
    });

// Modules
angular.module('angular-csrf-cross-domain.services', []);
angular.module('angular-csrf-cross-domain',
    [
        'angular-csrf-cross-domain.config',
        'angular-csrf-cross-domain.services',
        'ngCookies'
    ]);
