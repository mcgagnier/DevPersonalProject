module.exports = {
    getUser: function (app) {
        var db = app.get('db');
        return function(req, res) {
        }
    },

    createUser: function(app) {
        var db = app.get('db');

        return function(req, res) {

            var params = [
                req.body.username,
                req.body.name,
                req.body.photo,
                req.body.password,
                req.body.bio,
                req.body.email,
                req.body.age
            ];
            console.log('xxxx', params)
            db.create_user(params, function(err, response) {
                console.log('error', err),
                console.log('response', response)
                res.send(response);
            });
        }
    }
}
