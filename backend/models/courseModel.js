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

// const mongoose=require('mongoose');
// var courseSchema =new mongoose.Schema({
//     coursename:String,
//     articles : Number,
//     isDeleted : Boolean
// });


// var courseModel = mongoose.model('course', courseSchema);
// module.exports = courseModel;

const mongoose = require("mongoose");

const course = new mongoose.Schema({
  id : Number,
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  articles: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative");
    },
  },
  isDeleted: {
      type: Boolean,
      default: false
  }
});

const courseModel = mongoose.model("course", course);

module.exports = courseModel;