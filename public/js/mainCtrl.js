angular.module('itri').controller('mainCtrl', function($scope, mainSrvc, $http){
    $scope.user = {};

    $scope.currentUser = function(user) {
        var authHeader = btoa(user.username + ':' + user.password);
        return $http({
            method: 'GET',
            url: 'http://localhost:8686/api/user',
            headers: {
                'Authorization': 'Basic ' + authHeader,
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            $scope.user = response.data;
        });
    }

    $scope.getWorkouts = function () {
        mainSrvc.getWorkouts().then(function(response) {
        $scope.stats = response;
    })
}



$scope.users = mainSrvc.sampleUserData;

$scope.stats = mainSrvc.sampleStats;

});
