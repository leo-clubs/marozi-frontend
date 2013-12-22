'use strict';

var app = angular.module('maroziFrontendApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pascalprecht.translate'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/login', {
      templateUrl: 'views/sessions/index.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
);

app.config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
  });
  $translateProvider.preferredLanguage('en');
}
);
