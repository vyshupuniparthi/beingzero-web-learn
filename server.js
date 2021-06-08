const express= require('express');
var bodyParser = require("body-parser");
const shortid = require('shortid');
const courseLib = require('./backend/lib/courseLib');
// const dbConnectLib = require('./backend/lib/dbConnectLib');
//const config = require('./backend/config/config')
//const testdb = require('./backend/db/dbtest');
const mongoose=require('mongoose');
var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://vyshnavi_29:"+password+"@cluster0.k3xuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
console.log("UNIQUE ID: "+shortid());
var db = mongoose.connection;
db.on('connected', function () {
console.log('Database connected!');
});
const app = express();
// dbConnectLib.connect();
let requestsServed=0;

//this is to get frm data an fill that in req.body
app.use(express.urlencoded({extended:true}));

//this is to get api data(sent by JX AJAX code in frontend in JSON from that is added to
app.use(express.json());


//Add a static hadler for all static files - CSS/JS/IMG
app.use(express.static(__dirname+"/frontend"));
//app.use(express.static(__dirname+"morestatic"));

app.post("/register",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var cpassword= req.body.cpassword;

    var data = {
        "name": name,
        "email" : email,
        "phno": phno,
        "password" : password,
        "cpassword": cpassword
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect("/welcome");

})

app.get("/", function(req, res){
    let fullFilePath = __dirname + "/frontend/html/index.html";
    res.sendFile(fullFilePath);
})

app.get("/resume", function(req, res){
    let fullFilePath = __dirname + "/frontend/html/resume.html";
    res.sendFile(fullFilePath);
})

app.get("/google", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/google.html";
    res.sendFile(fullFilePath);

})

app.get("/color", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/color.html";
    res.sendFile(fullFilePath);
})

app.get("/register", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/register.html";
    res.sendFile(fullFilePath);
})

app.get("/login", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/login.html";
    res.sendFile(fullFilePath);
})

app.get("/todo", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/todo.html";
    res.sendFile(fullFilePath);
})
app.get("/registerapi", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/registerapi.html";
    res.sendFile(fullFilePath);
})
app.get("/crudapp", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/crud.html";
    res.sendFile(fullFilePath);
})
app.get("/tambola", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/tambola.html";
    res.sendFile(fullFilePath);
})
app.get("/welcome", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/welcome.html";
    res.sendFile(fullFilePath);
})

//Heroku will automatically set an environment variable called PORT
 const PORT = process.env.PORT || 3000;

// // Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
