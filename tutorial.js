var fs = require('fs');
var path = process.argv[2];



var data = fs.readFileSync(path, 'utf8', function(err){
	if(err){
		console.log("hubo un error al leer el archivo: " + err);
	}
});

var array = data.toString().split('\n');
var suma=0;
for (var i =0; i< array.length; i++) {
	console.log("Renglon numero: "+ i +", contiene: "+array[i]);
	suma +=1;

};

console.log("El numero de filas en el archivo es  "+ suma);

