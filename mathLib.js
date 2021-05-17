//export it if we want to use it in another file
/*
module.exports.add = function(a,b){
    return a+b;
}
module.exports.mul = function(a,b){
    return a*b;
}
module.exports.config = {'name'=''};
*/
module.exports = {
    add: function(a,b){
        return a+b;
    },
    mul: function(a,b){
        return a*b;
    },

    config: {'name': 'being zero'}
}
