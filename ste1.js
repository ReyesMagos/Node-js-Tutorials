//importa el modulo File System. 
var fs = require('fs');

fs.readFile(process.argv[2],  'utf8', function(err, data){
	if(err)
		console.log(err);
	var file = data.toString().split('\n');
	var suma = 0;

	for (var i = 0; i < file.length-1; i++) {
		suma += 1;
	   
	};
	console.log(suma);

});
