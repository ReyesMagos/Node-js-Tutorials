var fs = require('fs');

fs.readdir(process.argv[2],function(err,list){
	console.log(list.length);
});