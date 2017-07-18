console.log('ShowController is here');
app.controller('showController', ['$scope','qaFactory', '$routeParams', '$rootScope', function($scope, qaFactory, $routeParams, $rootScope) {

     console.log('>>>>>>>>>>>ID>>>>>', $rootScope.loggedUser);
     qaFactory.showq(function(returnedData) {
       $scope.questions = returnedData;
       console.log('questions are found and displayed!', $scope.questions);
     })
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
