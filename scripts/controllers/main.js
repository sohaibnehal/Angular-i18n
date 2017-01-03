'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
app.controller('MainCtrl', function ($scope, $translate, API) {


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
    API.loadLanguage(url).then(function (data) {
        $scope.data = data;
      },
      function (err) {
        console.log(err);
      }
    );
  }

  });
