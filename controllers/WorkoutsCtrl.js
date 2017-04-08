module.exports = {
    getWorkouts: function (app) {
        var db = app.get('db');
        return function(req, res) {
            console.log('gettting workouts');
        }
    },

    createWorkout: function(app) {
        var db = app.get('db');

        return function(req, res) {

            var params = [
                req.body.date,
                req.body.workoutType,
                'miles',
                req.body.distance,
                req.body.time,
                req.body.desc,
                req.session.user.username
            ];
            console.log('xxxx', params)
            db.create_workout(params, function(err, response) {
                console.log('error', err),
                console.log('response', response)
                res.send(response);
            });
        }
    }
}
