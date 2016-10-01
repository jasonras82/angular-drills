app.controller('mainCtrl', function($scope, mainSvc) {
  $scope.employmentData = mainSvc.myData;
  $scope.searchEmployees = '';
});
