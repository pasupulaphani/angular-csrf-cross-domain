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
