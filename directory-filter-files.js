"use strict";

var fs = require('fs');
var dir = process.argv[2].toString();
var ext = process.argv[3];
var fileArr = [];

fs.readdir(dir, function(err, files) {
        fileArr = files.filter(function(file) {
                return file.split('.')[1] == ext;
        });

        fileArr.forEach(function(ele) {
        console.log(ele);
        });
});
