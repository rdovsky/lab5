var data = require("../data.json");

exports.addFriend = function(request, response) {
    console.log("addFriend called")
    var friend = request.query.name;
    var description = request.query.description;

    var newFriend = {
        name: friend,
        description: description,
        imageURL: "http://lorempixel.com/400/400/people"
    }

    data.friends.push(newFriend);
    response.redirect('/');
    console.log()
    //res.render('add', data);
}
