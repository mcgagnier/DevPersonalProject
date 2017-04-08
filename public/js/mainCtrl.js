angular.module('itri').controller('mainCtrl', function($scope, mainSrvc, $http){
    $scope.user = {};
    $scope.workout = {
        date: '3/17/17',
        time: '4',
        distance: '45',
        desc: 'fun'
    }

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
        // console.log('hi', newWorkout)
        //TAKE THIS OUT RIGHT BELOW HERE
        newWorkout.workoutType = workoutType
        mainSrvc.createWorkout(newWorkout).then(function(response) {
            // console.log(987654321, response);
        })
    }



$scope.users = mainSrvc.sampleUserData;

$scope.stats = mainSrvc.sampleStats;

});
