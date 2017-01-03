/**
 * Created by sohaibnehal on 03/01/2017.
 */

app.factory('API', function ($http, $q) {
  return {

    //------------------------------- User-----------------------------------------

    loadLanguage: function (url)
    {
      return $http({
        method: 'GET',
        url: url,
        headers: {
          'Content-type': 'application/json'
        }
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        return response.data;
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        return $q.reject(response.data);
        // or server returns response with an error status.
      });

    }
  };
});

