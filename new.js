var leer = require('./quinto.js');
leer(process.argv[2], process.argv[3], function(err){
	if(err)
		console.log(err);
});
