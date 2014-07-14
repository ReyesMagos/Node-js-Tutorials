var http = require('http');
var fs = require('fs');
 var map = require('through2-map')
var port= process.argv[2];
var path = process.argv[3];
http.createServer(function(req,res){
	//var s=fs.createWriteStream('file3.txt','utf8');
	//fs.createReadStream(path,'utf8').pipe(res);
	//console.log(s.toString());
	 
   fs.createReadStream(path.toString(),'utf8').pipe(res);
   /*/
   fs.createReadStream(path.toString(),'utf8').pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);/*/

	//res.end('Recibiba','utf8');

}).listen(port);
console.log('escuchando el puerto: '+port);