angular.module('timer', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('timer', {
      url: '/',
      templateUrl: 'timer.html',
      controller: 'TimerCtrl as timerCtrl'
    });
  }])

  .controller('TimerCtrl', function() {
    var timerCtrl = this;
    alert('hey')
  })
;
