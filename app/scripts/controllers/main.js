'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
app.controller('MainCtrl', function ($scope, $translate) {


/*
  $translate(['TITLE', 'AUTHOR', 'SUB_HEADING', 'PARAGRAPH']).then(function (translations) {
    $scope.title = translations.TITLE;
    $scope.author = translations.AUTHOR;
    $scope.sub_heading = translations.SUB_HEADING;
    $scope.paragraph = translations.PARAGRAPH;
  }, function (translationIds) {
  });*/

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

  });
