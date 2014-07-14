var net = require('net');
var port= process.argv[2];
var date = new Date();

var server = net.createServer(function(socket){
	//recibimos una conexxion nuestro codigo va aca 
	//YYYY_MM_DD
	var m = Number(date.getMonth());
	m+=1;
	if(m<10)
		m=('0'+m.toString());

	var fecha = date.getFullYear()+"-";
	fecha+= m+"-";
	fecha+= date.getDate();
	console.log(fecha);
	socket.end(fecha);
});
server.listen(port);
console.log('servidor iniciado en el puerto ' + port);
