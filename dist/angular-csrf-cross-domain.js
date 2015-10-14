(function(window, document) {

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
/**
 * @ngdoc service
 * @name csrf-cross-domain.services.csrfCD
 * @description
 * # csrfCD
 * Provider in the csrf-cross-domain.services.
 */
angular.module('csrf-cross-domain.services')
    .provider(
        'csrfCD',
        function() {
            'use strict';

            var headerName = 'X-XSRF-TOKEN';
            var cookieName = 'XSRF-TOKEN';
            var allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

            this.setHeaderName = function(n) {
                headerName = n;
            };
            this.setCookieName = function(n) {
                cookieName = n;
            };
            this.setAllowedMethods = function(n) {
                allowedMethods = n;
            };
            this.$get = ['$cookies', function($cookies) {
                return {
                    'request': function(config) {
                        if (allowedMethods.indexOf(config.method) !== -1) {
                            // Read the cookie and set the header
                            config.headers[headerName] = $cookies[cookieName];
                        }
                        return config;
                    }
                };
            }];
        })
    .config(function($httpProvider) {

        // for sharing cookies, ... with cross origin requests
        $httpProvider.defaults.withCredentials = true;

        // set csrf for cross origin requests
        $httpProvider.interceptors.push('csrfCD');
    });
})(window, document);
