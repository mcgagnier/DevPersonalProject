angular.module('itri').service('mainSrvc', function($http, $q){

    this.testData = "Can you hear me now????"

    this.createWorkout = function(newWorkout) {
        return $http({
            method: 'POST',
            url: '/api/workouts',
            data: newWorkout
        }).then(function(response){
            return response;
            colsole.log(response);

        });
    }
    this.createUser = function(newUser) {
        return $http({
            method: 'POST',
            url: '/api/user',
            data: newUser
        }).then(function(response){
            return response;
            colsole.log(response);
        });
    }
    this.getWorkoutData = function(user) {
        console.log('workouts service');
        var deferred = $q.defer();
        return $http({
            method: 'GET',
            url: 'http://localhost:8686/api/workouts'
        }).then(function(response){
            console.log('workouts coming here', response)
            stats = response.data;
            return stats
        });
    }

//     this.sampleStats = [{
//         username: 'mcgagnier',
//         code: 'Run',
//         date: "3/26/17",
//         distance: "6.1",
//         time: 66,
//         desc: "Great training run"
//
//     },{
//         username: 'mcgagnier',
//         code: 'Bike',
//         date: "3/25/17",
//         distance: "11.38",
//         time: 44,
//         desc: "Great training ride"
//     }
//
// ]
})
