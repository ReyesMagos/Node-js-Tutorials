var fs = require('fs');
var write = require('./write');

var path = process.argv[2];
var nameFile= process.argv[3];

fs.readFile(path,'utf8',function(err, data){
	if(err)
		console.log('Hubo un error al leer. ' + err);

	//console.log(data);
	var s = '\n Este es el nuevo fichero';
	data += s;
	write.escribir(nameFile,data);
	

	
});

console.log('Realizo mas trabajo 1');
console.log('Realizo mas trabajo 2');