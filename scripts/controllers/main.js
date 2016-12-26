'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
app.controller('MainCtrl', function ($scope, $translate, $http) {


  $scope.view = { 'experience' : true };
  $scope.data = {};

  var jsonURLs, activeLanguge;
  jsonURLs = {
    'en_US':'scripts/translations/en_us.json',
    'en':'scripts/translations/en_us.json',
    'en_UK':'scripts/translations/en_uk.json',
    'de':'scripts/translations/de.json',
    'de_DE':'scripts/translations/de.json',
    'de_CH':'scripts/translations/de.json'
  };

  activeLanguge = $translate.use() || $translate.preferredLanguage();
  loadLanguageData(jsonURLs[activeLanguge]);

  $scope.changeLanguage = function (langKey)
  {
    $translate.use(langKey);
    loadLanguageData(jsonURLs[langKey])
  };

  function loadLanguageData(url)
  {
    $http({
      method: 'GET',
      url: url,
      headers: {
        'Content-type': 'application/json'
      }
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      $scope.data = response.data;
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      console.log(response);
      // or server returns response with an error status.
    });

  }

  });
