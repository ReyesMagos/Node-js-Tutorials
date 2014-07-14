var http = require('http');
var fs = require('fs');
 var map = require('through2-map')
var port= process.argv[2];
http.createServer(function(req,res){
	//var s=fs.createWriteStream('file3.txt','utf8');
	//fs.createReadStream(path,'utf8').pipe(res);
	//console.log(s.toString());
	 var body="";
   	req.on('data',function(data){
   		body+=data;
   	});

   	req.on('end',function(){
   		res.end(body.toUpperCase(),'utf8');	
   	});
	//res.end('Recibiba','utf8');

}).listen(port);
console.log('escuchando el puerto: '+port);