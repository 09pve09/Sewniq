console.log('AngularController is here');
app.controller('AngularController', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
  $scope.key = "6Le5BioUAAAAAKIKpUaEcoVKGJ0aXxQohLns_rUD";

  var present_date = new Date().getTime()/1000;
  var sellingdate = new Date('Jul 24, 2017 13:29:00').getTime()/1000;
  var deadline = new Date("Aug 05, 2017 20:16:00").getTime()/1000;
  var counter;

  $(function(){
      FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };

      if (present_date <= sellingdate) {
        var countdown = sellingdate - present_date;
      }
      else if (present_date > sellingdate) {
        var countdown = deadline - present_date;
        $('#new_container').show();
        $('#count_title').hide()
      }

      countdown = Math.max(1, countdown);

      counter = new FlipClock($('.countdown_clock'), countdown, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom',
        callbacks:{
          stop: function() {
            $('#new_container').show();
            $('#count_title').hide();
            counter.setTime(deadline-sellingdate);
            counter.start();
          }
        }
      });
    });

    $scope.verify = function() {
      if(($scope.confirm == true) && (typeof(grecaptcha.getResponse()) === 'string')) {
        $(".token_address").show();
        $('#captcha').hide();
      }
      else{
        $('#captcha').show();

      }
    };

}]);
