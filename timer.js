angular.module('timer', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('index', {
      url: '/',
      templateUrl: 'timer.html',
      controller: 'TimerCtrl as timerCtrl'
    });
  }])

  .controller('TimerCtrl', function($interval) {
    var timerCtrl = this;
    timerCtrl.time = { seconds: null, minutes: null };
    timerCtrl.displayTime = null;

    timerCtrl.startTimer = function() {
      parseTime();
      var timerPromise = $interval(function(){
        timerCtrl.parsedTime.subtract(1, 'seconds');
        setDisplayTime();
        if (timerCtrl.parsedTime.asMilliseconds() === 0) $interval.cancel(timerPromise);
      }, 1000);
    }

    var parseTime = function() {
      // ensure timerCtrl.time is formatted "07:07:07"
      timerCtrl.parsedTime = moment.duration({
        seconds: timerCtrl.time.seconds,
        minutes: timerCtrl.time.minutes
      });

      setDisplayTime();
    }

    var setDisplayTime = function() {
      timerCtrl.displayTime = timerCtrl.parsedTime.minutes() + ':' + timerCtrl.parsedTime.seconds();
    }


  })
;
