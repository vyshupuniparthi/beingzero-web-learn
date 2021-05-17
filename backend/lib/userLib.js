//Gives us functions that API can use directly
var userModel=require('./userModel');

module.exports.getAllUsers = function(){

    //select * from users
    userModel.find({},function(err,userObjects){

    })
    //select * from users where username like nikhil

   // userModel.find({username: 'nikhil'}, function(err,userArrOfObjects));
}