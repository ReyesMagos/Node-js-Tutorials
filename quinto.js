var fs = require('fs');
	var  p = require('path');

module.exports = function leer(path, ext, callback){
	
		fs.readdir(path, function (err, list){
			var newList = [];
			if(err)
				return callback(err, null);
				
				for (var i = 0; i < list.length; i++) {

					if(p.extname(list[i])==("."+ext)){
						console.log(list[i]);
						newList.push(list[i]);
					}
				}

		callback(null, newList);
				
				
			
	});

}


