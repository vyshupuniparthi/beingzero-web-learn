var courseModel = require('../models/courseModel');

module.exports.getall = function(req,res)
{
var query = {};
courseModel.find(query, function(err, obj){
if(err)
console.log("ERROR: "+err);
res.send(obj);
});
}

module.exports.addnewone = function(req,res)
{
    var obj = new courseModel(req.body);
    console.log(obj);
    obj.save(function(err){
        if(err)
        console.log("ERROR: "+err);
        else
        console.log("SAVE SUCCESS "+ JSON.stringify(obj));
        })   
}
module.exports.deleteone = function(req,res)
{
   // console.log(req);
    var id =req.params.idd;
    var idd;
    var obj = courseModel.find({id: id},function(err,obj){
       
    courseModel.findByIdAndRemove(obj[0]._id, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Removed User : ", docs);
        }
    });
    });

}


module.exports.update = function(req,res)
{
   // console.log(req);
    var id =req.params.idd;
    var idd;
    var obj = courseModel.find({id: id},function(err,obj){
    
    courseModel.findByIdAndUpdate(obj[0]._id, {articles: req.body.articles},
     function (err, docs) {
    if (err){
console.log(err)
}
else{
console.log("Updated User : ", docs);
}
});
    })
}