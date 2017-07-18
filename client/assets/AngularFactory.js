console.log('UsersFactory is here');
// var currentUser;
app.factory('usersFactory', ['$http', function($http) {
  var users = [];
  var user = {};

  function UsersFactory(){
    this.create = function(newUser, callback){
      console.log("Creating a new user");
      $http.post('/users', newUser).then(function(returned_data){
        console.log("RETURNED USER",returned_data.data);
        // currentUser = returned_data.data;
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
  }
  return new UsersFactory();
}]);
