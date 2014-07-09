var fs = require('fs');

var path = process.argv[2];
var name = process.argv[3];


fs.readFile(path,'utf8',function(err, data){
	if(err)
		console.log('Hubo un Error al Leer. ' + err);


	var s = '\n Este es EL archivo Creado';
	data +=s;


	fs.writeFile(name,data,function(err){
		if(err)
			console.log('Hubo un Error al Escribir. '+ err);
		console.log('El Archivo ha sido Guardado Con exito');
	});


	console.log(data);
});


