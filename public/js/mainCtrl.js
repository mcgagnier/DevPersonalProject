angular.module('itri').controller('mainCtrl', function($scope, mainSrvc, $http){
    $scope.user = {};
    $scope.workout = {};
    $scope.newUser = {};


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

    // $scope.getWorkouts = function () {
    //     mainSrvc.getWorkouts().then(function(response) {
    //         $scope.stats = response;
    //     });
    //
    // }

    $scope.createWorkout = function(newWorkout, workoutType) {
        console.log('hi', newWorkout)
        //TAKE THIS OUT RIGHT BELOW HERE
        newWorkout.workoutType = workoutType
        mainSrvc.createWorkout(newWorkout).then(function(response) {
            // console.log(987654321, response);
        })
    }

    $scope.createUser = function(newUser) {
        console.log('hello', newUser)
        mainSrvc.createUser(newUser).then(function(response) {
            console.log(987654321, response);
        })
    }



$scope.users = mainSrvc.sampleUserData;

$scope.stats = mainSrvc.sampleStats;

});
