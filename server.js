const express= require('express');
const shortid = require('shortid');
const mongoose=require('mongoose');
const courseLib = require('./backend/lib/courseLib');
const dbconnect = require('./backend/db/dbconnect');
// const testdb = require('./backend/db/dbtest');

//connect to db
 var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://vyshnavi_29:"+password+"@cluster0.k3xuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  //contains dbserver-db name-username-password
const dbOptions={};
//TODO:
mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.on('connected', function(){
//     console.log("Database Connected");

// })

console.log("UNIQUE ID: "+shortid());
const app = express();

let requestsServed=0;

//this is to get frm data an fill that in req.body
app.use(express.urlencoded({extended:true}));

//this is to get api data(sent by JX AJAX code in frontend in JSON from that is added to
app.use(express.json());

//tell express to convert  from data to json

var users=[
    {username: 'admin2', email:'admin2@beingzero.in', userId:2},
    {username: 'admin1', email:'admin1@beingzero.in', userId:1},
]; //declare users array

//user:username  ,email: id

//1. create user - add a new user in users array to the end
//2. retrieve all users- get json of all users
//retrieve user with given data - get only single json object
//3. update a user with given id
//4. delete the user

//api-all crud operations should be accessed through url
//rest APIs
//post api/users
//get api/users
//get /api/users/:userId
//put /api/users/:userId
//delete /api/users/:userId


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

app.get('/api/users', function(req,res){
    res.json(users);
})

app.get('/api/users/:userId', function(req,res){
    var userId= req.params.userId;

    //search for todo with givenid
    let idx = -1;
    for(let i=0;i<users.length;i++){
        if(users[i]==userId){
            idx=i;
            break;
        }
    }
    if(idx==-1)
        res.json({error: 'user not found'});
    else
        res.json(users[idx]);   

})
app.put('/api/users/:userId', function(req,res){
    let id = req.params.userId;

    console.log('PUT CALL CAME FOR'+id);
    //search for element idx in users array whose id is ==  id

    users[idx]=req.body;//update the old object with new one

    //we can use res.sendFile if we want to send html file response

    //api response
    res.json({message: 'success'});
})
/*app.delete('/api/users/:userId', function(req, res) {
   var id = req.params("id");
        users.remove({
            _id: id 
        }, function(err){
            if (err) {
                console.log(err)
            }
            else {
               return res.send("Removed");
            }
     });
});*/

app.post('/api/users', function(req,res){
    //create new user in given req.body

    //validate:
    //if userid already exists send back an error
    //password check
    //email verification

    console.log("POST CALL CAME HERE");
    //req.body can be json or urlencoded data
    var newUser = req.body;  //body contains the form data
    users.push(newUser);
    //res.json(newUser);
    //console.log(newUser);
    res.sendFile(__dirname+'/frontend/html/registration-success.html');
})
app.get('/api/courses', courseLib.getallcourses);
app.post('/api/courses', courseLib.getallcourses);

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
app.get("/registerapi", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/registerapi.html";
    res.sendFile(fullFilePath);
})
app.get("/crud", function(req,res){
    const fullFilePath = __dirname + "/frontend/html/crud.html";
    res.sendFile(fullFilePath);
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})