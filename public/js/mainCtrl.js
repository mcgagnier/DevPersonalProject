angular.module('itri').controller('mainCtrl', function($scope, mainSrvc, $http){
    $scope.user = {};
    $scope.currentUser = function(user) {
        var authHeader = btoa(user.username + ':' + user.password);
        return $http({
            method: 'GET',
            url: 'http://localhost:8686/api/user',
            headers: {
                'Authorization': 'Basic ' + authHeader,
                'Content-Type': 'applicatoin/json'
            }
        }).then(function(response){
            $scope.user = response.data;
        });
    }

    this.login = function() {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmounta.in/api/chats'
        }).then(function(response){
            messages = response.data;
            return messages

        });
    }

$scope.users = mainSrvc.sampleUserData;

$scope.stats = mainSrvc.sampleStats;

});
