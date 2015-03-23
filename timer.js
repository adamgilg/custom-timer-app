angular.module('timer', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('index', {
      url: '/',
      templateUrl: 'timer.html',
      controller: 'TimerCtrl as timerCtrl'
    });
  }])

  .controller('TimerCtrl', function() {
    var timerCtrl = this;
  })
;
