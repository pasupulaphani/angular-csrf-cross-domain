'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('angular-csrf-cross-domain', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angular-csrf-cross-domain');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angular-csrf-cross-domain.config')).toBeTruthy();
    });

    

    

    
    it('should load services module', function() {
        expect(hasModule('angular-csrf-cross-domain.services')).toBeTruthy();
    });
    

});
