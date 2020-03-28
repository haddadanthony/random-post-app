const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000;


const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quarantine'
});
 
// connect to database
mc.connect();

app.listen(port);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route