// const mongoose=require('mongoose');

// var userSchema = new mangoose.Schema({
//     username: String,
//     dateOfBirthe: Date,
//     age: Number,
//     isDeleted: Boolean
// });

// //create model out of schema
// var userModel = mongoose.model('userTable', userSchema);
// //module.exports = userModel;
// exports = userModel;

const mongoose=require('mongoose');
var courseSchema =new mongoose.Schema({
    coursename:String,
    articles : Number,
    isDeleted : Boolean
});


var courseModel = mongoose.model('course', courseSchema);
module.exports = courseModel;
