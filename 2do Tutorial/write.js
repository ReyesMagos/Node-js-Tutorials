var fs= require('fs');
function escribir(nameFile, content){
	//primer parametro nombre fichero 
	//segundo parametro la informacion a escribir o a guardar, 
	//tercer parametro opciones como la codificacion del archivo 
	//cuarto parametro funcion de llamada de retorno o callback.
	fs.writeFile(nameFile,content,'utf8',function(err){
		if(err)
			console.log('Hubo un error al escribir. ' + err);

		console.log('El archivo fue guardado correctamente');
	});
	
}

exports.escribir= escribir;