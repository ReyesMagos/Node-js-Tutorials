var http= require('http');
var fs = require('fs');
var port= process.argv[2];
var path = process.argv[3];
http.createServer(function(req,res){
	console.log('Peticion recibida');
	fs.createReadStream(path, 'utf8').pipe(res);

}).listen(port);
console.log('El servidor Esta esuchando el puerto '+port);

