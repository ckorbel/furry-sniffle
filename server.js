
let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use(bodyParser.json({}));

require('./server/config/mongoose.js');
let routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, ()=>{
    console.log("listening on port 8000");
})