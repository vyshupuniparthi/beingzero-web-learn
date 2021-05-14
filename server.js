const express= require('express');

const app = express();
let requestserver=0;

//this is to get frm data an fill that in req.body
app.use(express.urlencoded({extended:true}));

//this is to get api data(sent by JX AJAX code in frontend in JSON from that is added to
app.use(express.json());

//tell express to convert  from data to json

var todos=[]; //declare todos array

//user:username  ,email: id

//1. create user - add a new user in users array to the end
//2. retrieve all users- get json of all users
//retrieve user with given data - get only single json object
//3. update a user with given id
//4. delete the user

//api-all crud operations should be accessed through url
//post api users
//

//Add a static hadler for all static files - CSS/JS/IMG
app.use(express.static(__dirname+"/frontend"));
//app.use(express.static(__dirname+"morestatic"));

//middleware has req,res and next
app.use(function(req,res,next){
    console.log("First middleware: A request came");
    requestsServed++;
    //if user is not logged in it will take him to home page else call next
    next(); //call the next matching handler
})

app.use(function(req,res,next){
    console.log("Second middleware: A request came");
    requestsServed++;
    //if user is not logged in it will take him to home page else call next
    next(); //call the next matching handler
})

app.use('/api', function(req,res,next){
    console.log("API middleware: A request came");
    requestsServed++;
    //if user is not logged in it will take him to home page else call next
    next(); //call the next matching handler
})

//This is home handler
app.get("/", function(req, res){
    res.send("Welcome to Vyshnavi's Basic Site")
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

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})