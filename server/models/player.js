var mongoose = require('mongoose');

var PlayerSchema = mongoose.Schema({
    name: {type:String},
    position: {type:String},
    game1Status: {type:String, default: "undecided"},
    game2Status: {type:String, default: "undecided" },
    game3Status: {type:String, default: "undecided"},
})

mongoose.model('Player', PlayerSchema);  