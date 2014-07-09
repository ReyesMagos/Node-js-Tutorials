var fs = require('fs');
function escribir(name, data){
	fs.writeFile(name,data,function(err){
		if(err)
			console.log('Hubo un Error al Escribir. '+ err);
		console.log('El Archivo ha sido Guardado Con exito');
	});

}
exports.escribir= escribir;