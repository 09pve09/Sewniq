var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
  .when('/',{
      templateUrl: 'partials/showmain.html'
  })
  // .when('/login',{
  //     templateUrl: 'partials/user.html',
  //     controller: 'userController'
  // })
  // .when('/new_question',{
  //     templateUrl: 'partials/newquestion.html',
  // })
  // .when('/new_answer/:id',{
  //     templateUrl: 'partials/new_answer.html',
  // })
  // .when('/question/:id',{
  //     templateUrl: 'partials/showone.html',
  // })


  // .otherwise({
  //   redirectTo: '/'
  // });
});

// app.run( function($rootScope, $location) {
//
//     // register listener to watch route changes
//     $rootScope.$on( "$locationChangeStart", function(event, next, current) {
//       if ( $rootScope.loggedUser == null ) {
//         console.log('u shall not pass...unless u log in');
//         $location.url( "/login" );
//         if ( next.templateUrl == "partials/login.html" && $rootScope.loggedUser != null) {
//           console.log('u shall not pass...u re already logged in');
//           $location.url( "/" );
//         }
//         else {
//           // not going to #login, we should redirect now
//           console.log('pass');
//         }
//       }
//     });
// })
