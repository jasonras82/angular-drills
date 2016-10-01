app.service('mainSvc', function($http, $q) {
  this.getVehicles = function() {
    return $http.get('http://swapi.co/api/vehicles/');

  };
  // console.log(vehicleResults);
});
