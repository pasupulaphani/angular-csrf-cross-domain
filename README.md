[![Build Status](https://secure.travis-ci.org/pasupulaphani/angular-csrf-cross-domain.png?branch=master)](http://travis-ci.org/pasupulaphani/angular-csrf-cross-domain) [![Bower version](https://badge.fury.io/bo/angular-csrf-cross-domain.svg)](http://badge.fury.io/bo/angular-csrf-cross-domain) [![Hex.pm](http://img.shields.io/hexpm/l/plug.svg)]()


angular-csrf-cross-domain
============
> Enable csrf/xsrf for cross domain requests in Angular

[$http docs](https://docs.angularjs.org/api/ng/service/$http) : The header will not be set for cross-domain requests.

You only need this library:
* You are making *cross domain requests* and enabled angular csrf/xsrf protection.

Getting Started
-----
Install the library through bower.
```js
bower install angular-csrf-cross-domain
```
>Also called as angular-csrf-cross-domain

Add it to your app dependency
```js
angular.module('myModule',['csrf-cross-domain'])
```