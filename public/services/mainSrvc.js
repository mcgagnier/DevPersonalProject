angular.module('itri').service('mainSrvc', function($http){

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




    this.sampleStats = [{
        username: 'mcgagnier',
        code: 'Run',
        date: "3/26/17",
        distance: "6.1",
        time: 66,
        desc: "Great training run"

    },{
        username: 'mcgagnier',
        code: 'Bike',
        date: "3/25/17",
        distance: "11.38",
        time: 44,
        desc: "Great training ride"


    },{
        username: 'mcgagnier',
        code: 'Run',
        date: "3/23/17",
        distance: "3",
        time: 27,
        desc: "Nice short run"


    },{
        username: 'mcgagnier',
        code: 'Bike',
        date: "3/22/17",
        distance: "8.4",
        time: 31,
        desc: "Commute home from work"


    },{
        username: 'mcgagnier',
        code: 'Run',
        date: "3/20/17",
        distance: "4.3",
        time: 37.5,
        desc: "Morning run"


    },{
        username: 'mcgagnier',
        code: 'Swim',
        date: "3/25/17",
        distance: "625",
        time: 38,
        desc: "Saturday afternoon in the pool"
    },

    {
        username: 'mcgagnier',
        code: 'Run',
        date: "3/26/17",
        distance: "6.1",
        time: 66,
        desc: "Great training run"

    },{
        username: 'mcgagnier',
        code: 'Bike',
        date: "3/25/17",
        distance: "11.38",
        time: 44,
        desc: "Great training ride"


    },{
        username: 'mcgagnier',
        code: 'Run',
        date: "3/23/17",
        distance: "3",
        time: 27,
        desc: "Nice short run"


    },{
        username: 'mcgagnier',
        code: 'Bike',
        date: "3/22/17",
        distance: "8.4",
        time: 31,
        desc: "Commute home from work"


    },{
        username: 'mcgagnier',
        code: 'Run',
        date: "3/20/17",
        distance: "4.3",
        time: 37.5,
        desc: "Morning run"


    },{
        username: 'mcgagnier',
        code: 'Swim',
        date: "3/25/17",
        distance: "625",
        time: 38,
        desc: "Saturday afternoon in the pool"
    }

]
})
