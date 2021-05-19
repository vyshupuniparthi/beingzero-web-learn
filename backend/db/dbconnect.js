// const mongoose = require('mongoose');

// m00dule.exports.connect = function(){

//     var password = process.env.Mongo_atlas_password;
//     var connectionString = "mongodb+srv://vyshnavi_29:"+password+"@cluster0.k3xuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";  //contains dbserver-db name-username-password
//     mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true });
//     mongoose.connection.on('connected', function(){
//         console.log("Database Connected");
    
//         courseLib.getallcourses(function(err, coursesArray){
//             console.log(coursesArray);
//         })
//         //after connected run this code
//         // courseLib.createcourse({coursename: 'web development'}, function(err,savedObj){
//         // //     console.log(savedObj);
//         // })
//     })
// }


