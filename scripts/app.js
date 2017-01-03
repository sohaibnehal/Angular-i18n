'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
var app = angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


app.config(['$translateProvider', function ($translateProvider) {

/*  $translateProvider.useStaticFilesLoader({
    prefix: 'scripts/translations/',
    suffix: '.json'
  });*/

/*  $translateProvider.registerAvailableLanguageKeys(['en_us', 'en_uk', 'de'], {
    'en_US': 'en_us',
    'en':'en_us',
    'en_UK': 'en_uk',
    'de_DE': 'de',
    'de_CH': 'de'
  });*/
/*
  $translateProvider.determinePreferredLanguage();

  $translateProvider.fallbackLanguage('en_us');*/


  $translateProvider
    .useStaticFilesLoader({
      prefix: 'scripts/translations/',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en_us', 'en_uk', 'de'], {
      'en_US': 'en_us',
      'en':'en_us',
      'en_UK': 'en_uk',
      'de_DE': 'de',
      'de_CH': 'de'
    })
    .fallbackLanguage('en_us')
    .determinePreferredLanguage();



}]);
