console.log('AngularController is here');
app.controller('AngularController', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
    $('.countdown').final_countdown({
          'start': new Date("Jan 22, 2017 15:37:25").getTime()/1000,
          'end': new Date("Jan 5, 2018 11:37:25").getTime()/1000,
          'now': new Date().getTime()/1000
      });

  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
