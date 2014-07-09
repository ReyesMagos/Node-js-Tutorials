//importa el modulo File System. 
var fs = require('fs');

var data = fs.readFileSynccl("archivo", "utf8");
var file = data.toString().split('\n');
for (var i = 0; i < file.length; i++) {
	console.log(file[i]);
};
