var fs = require("fs");
var path = process.argv[2];
var data =fs.readFileSync(path, 'utf8',function(err){
	if(err) {
		return console.log(err);
	}
	

});

	var file = data.toString();
	var array = file.split('\n');
	var suma= 0;
	for(i =0; i< array.length-1; i++){
		suma+=1;
	}
	console.log(suma);

