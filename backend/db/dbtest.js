const courselib = require('../lib/courseLib');
courselib.createcourse({coursename: 'Cybersecurity', articles:'4'}, function(err,course){
    console.log(course);
})