var mongoose = require('mongoose');
var fs = require ('fs');
var path = require('path');

//connect to mongoose
mongoose.connect('mongodb://localhost/notes');



//create a variable that points to the path where all the models live
var models_path = path.join(__dirname, './../models');


//require the file (this runs the model file which registers the schema)
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});