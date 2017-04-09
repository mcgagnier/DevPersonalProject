angular.module('itri', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
                 .state('home',{
                     url:'/home',
                     templateUrl: "../views/home.html"
                 })
                 .state('new-user',{
                     url:'/new-user',
                     templateUrl: "../views/new-user.html",
                    //  controller: 'NewUserCtrl'

                 })
                 .state('login',{
                     url:'/',
                     templateUrl: "../views/login.html"
                 })
                 .state('log-run',{
                     url:'/log-run',
                     templateUrl: "../views/log-run.html",
                     controller: 'mainCtrl'
                 })
                 .state('log-swim',{
                     url:'/log-swim',
                     templateUrl: "../views/log-swim.html",
                     controller: 'mainCtrl'
                 })
                 .state('log-bike',{
                     url:'/log-bike',
                     templateUrl: "../views/log-bike.html",
                     controller: 'mainCtrl'
                 })




        $urlRouterProvider
            .otherwise('/');
            });
