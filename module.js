var fs = require('fs');
var write= require('./writefunction');
fs.readFile(process.argv[2], 'utf8', function(err, data){
	console.log("leii");
	write.escribir('hello.txt', data);

});