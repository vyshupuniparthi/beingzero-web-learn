// //Gives us functions that API can use directly
// var userModel=require('./userModel');

// module.exports.getAllUsers = function(){

//     //select * from users
//     userModel.find({},function(err,userObjects){

//     })
//     //select * from users where username like nikhil

//    // userModel.find({username: 'nikhil'}, function(err,userArrOfObjects));
// }

const coursemodel = require('../models/coursemodel');

module.exports.createcourse = function(courseobj,callback){
    var course=new coursemodel(courseobj);
    course.save(function(err,courseobj){
        if(err)
        {
            console.log("err"+err);
        }
        else{
            callback(err,courseobj);
        }
    })
}

module.exports.getallcourses = function(callback){
    var query = {}
    coursemodel.find(query,function(err,courseobjarr){
        if(err)
        {
            console.log("err"+err);
        }
        else{
            callback(err,courseobjarr);
        }
    })
}
