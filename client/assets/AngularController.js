console.log('AngularController is here');
app.controller('AngularController', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
  var present_date = new Date().getTime()/1000;
  var sellingdate = new Date('Jul 25, 2017 20:16:00').getTime()/1000;
  var deadline = new Date("Jul 31, 2017 20:16:00").getTime()/1000;
  var counter;

  $(function(){
      FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };

      if (present_date <= sellingdate) {
        var countdown = sellingdate - present_date;
      }
      else if (present_date > sellingdate) {
        var countdown = deadline - present_date;
        $('#new_container').show();
      }

      countdown = Math.max(1, countdown);

      counter = new FlipClock($('.countdown_clock'), countdown, {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom',
        callbacks:{
          stop: function() {
            $('#new_container').show();
            counter.setTime(deadline-sellingdate);
            counter.start();
          }
        }
      });
    });


  // $(window).load(function(){
  //     var timespan = countdown(new Date().getTime(), new Date("Jul 19, 2017 18:30:00").getTime(),  countdown.SECONDS);
  //   // console.log(timespan);
  //
  //   var clock = $('.your-clock').FlipClock(timespan.seconds, {
  //   countdown:true,
  //   clockFace: 'DailyCounter'
  //   });
  //
  //   })
}]);
