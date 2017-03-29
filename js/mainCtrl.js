angular.module('itri').controller('mainCtrl', function($scope, mainSrvc){

$scope.users = mainSrvc.sampleUserData;

$scope.stats = mainSrvc.sampleStats;

})
