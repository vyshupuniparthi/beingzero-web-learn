const express = require('express');
const courselib = require('../lib/courseLib');
 
const app = express();
const mongoose = require('mongoose');
// dbconnect.connect();
 
var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://vyshnavi_29:"+password+"@cluster0.k3xuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

var db = mongoose.connection;
db.on('connected', function () {
console.log('Database connected!');
});
