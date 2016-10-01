app.controller('mainCtrl', function($scope, mainSvc) {
  $scope.test = "boom";
  mainSvc.getVehicles()
    .then(function(response) {
      $scope.vehicles = response.data.results;
      console.log($scope.vehicles);
    });

});
