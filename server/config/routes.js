var Players = require('./../controllers/players.js');
var path = require('path');
var fs = require('fs');   

module.exports = function(app) {
    app.post('/players', Players.create);
    app.get('/players', Players.index);
    app.delete('/players/:id', Players.destroy);
    app.put('players/:id', Players.changeStatus);
    app.all("*", (req, res, next)=> {
        res.sendFile(path.resolve("./client/dist/index.html"));
    });
} 