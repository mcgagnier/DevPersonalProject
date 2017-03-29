angular.module('itri', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
                 .state('home',{
                     url:'/',
                     templateUrl: "../views/home.html"
                 })
                 .state('new-user',{
                     url:'/new-user',
                     templateUrl: "../views/new-user.html"
                 })
                 .state('login',{
                     url:'/login',
                     templateUrl: "../views/login.html"
                 })
                 .state('log-run',{
                     url:'/log-run',
                     templateUrl: "../views/log-run.html"
                 })
                 .state('log-swim',{
                     url:'/log-swim',
                     templateUrl: "../views/log-swim.html"
                 })
                 .state('log-bike',{
                     url:'/log-bike',
                     templateUrl: "../views/log-bike.html"

                 })
                //  .state('packages',{
                //      url:'/packages',
                //      templateUrl: "../views/packages.html",
                //      controller: 'packagesCtrl'
                 //
                //  })



        $urlRouterProvider
            .otherwise('/');
            });
