
// Modules filter files in directory

 // Module
var fs = require('fs');
var path = require('path');

module.exports = {

 listFiles : function(dir, fileExt, callback) {

        fs.readdir(dir,function( err, list)  {
                if (err) {callback(err);}
                list = list.filter(function (file) {
                        return path.extname(file) === '.' + fileExt
                });
          callback(null, list);
        });
    }
};



  // Program
var lists  = require('./dirmodule');
var dir = process.argv[2].toString();
var ext = process.argv[3];

lists.listFiles(dir, ext, function(err, list) {

        if(err) {return console.error('There was an error: ', err);}

        list.forEach(function(file) {
        console.log(file);
        });

});