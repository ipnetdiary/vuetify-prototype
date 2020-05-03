const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser');

var history = require('connect-history-api-fallback');

require('dotenv').config()

app.disable('x-powered-by');
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse application/json
app.use(jsonParser)
app.use(urlencodedParser)

app.use(cors());
app.use(history());
app.use(express.static('dist'))
app.use('/public',express.static('public'))

const port = 9999
app.listen(port, function(){
    console.log("Listening on port " + port)
})