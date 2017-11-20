var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {

    create: (req, res)=> {
        console.log('hit create');
        // res.json({message: "Players.create dummy response"})
        var newPlayer = new Player(req.body);
        newPlayer.save((err)=> {
            if(err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("made it to database");
                res.json(newPlayer);
            }
        })
    },

    index: (req, res)=> {
        console.log('hit index (controllers/players.js)');
        Player.find({}, (err, foundPlayers)=> {
            console.log("found players");
            res.json(foundPlayers);
        })
    },

    destroy: (req, res)=> {
        console.log("hit destory(players.js)");
        Player.remove({_id: req.params.id}, (err)=> {
            if(err) {
                console.log("error in destroy method");
                res.json(err);
            } else {
                console.log('succesfull destroyed player!');
                res.json("deleted a player");
            }
        })
    },

    changeStatus: (req, res)=> {
        console.log("hit change status (players.js)");
        var updateObject = {};
        updateObject['game'+req.body.number+'Status'] = req.body.status;
        Player.update({_id: req.body._id}, updateObject, function (err, updatedPlayer) {
            if(err) {
                console.log("what did you do....");
                res.json(err);
            } else {
                console.log("updated a player");
                res.json(updatedPlayer);
            }
        })
    }



}