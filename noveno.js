var net = require('net');
var port = process.argv[2];
var date = new Date();

var server = net.createServer(function(socket){
	var month= Number(date.getMonth());
	var fecha= date.getFullYear()+"-";
	month+=1;
	if(month<10)
		month= ('0'+month.toString());
	fecha+= month+"-";
	fecha+= date.getDate();
	fecha+= " "+date.getHours();
	fecha+=":"+date.getMinutes()+"\n";
	socket.end(fecha);
	

});
server.listen(port);
console.log('Servidor Iniciado en el puerto: ' + port);
