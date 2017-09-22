// console.log('AngularController is here');
app.controller('AngularController', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope) {
 $scope.key = "6Le5BioUAAAAAKIKpUaEcoVKGJ0aXxQohLns_rUD";



 var present_date = new Date().getTime()/1000;
 var sellingdate = new Date('Sept 30, 2017 16:00:00').getTime()/1000;
 var deadline = new Date("Nov 10, 2017 20:16:00").getTime()/1000;
 var counter;

 $(function(){
     FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };

     if (present_date <= sellingdate) {
       var countdown = sellingdate - present_date;
     }
     else if (present_date > sellingdate) {
       var countdown = deadline - present_date;
       $('#new_container').show();
       $('#count_title').hide();
       $('#count_title_1').show();
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
     if(($scope.confirm == true)) {
       if( $('#error_msg').css('display') == 'block') {
         $('#error_msg').hide();
       }
       $("#token_address").show();
     }
     else{
       if( $('#token_address').css('display') == 'block') {

       }
       else{
         $('#error_msg').show();
       }
     }
   };

  //  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  //  var defaultAccount = web3.eth.accounts[0];
  //  console.log('defacc: ', defaultAccount);
   //
  //  var fContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"total_ether","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalETH","outputs":[{"name":"total_ether","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"createTokens","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
  //  var Contract = fContract.at('0x58b6810ef4a6bd4ae7c51d70fd5a3215085425d7');
   //
  //  console.log('Contract owner: ', Contract.owner());
  //  console.log('Contract eth balance: ', Contract.totalETH().toNumber());
  //  console.log('Total Supply: ', Contract.totalSupply().toNumber());



}]);
