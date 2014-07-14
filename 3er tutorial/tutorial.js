var http = require('http');
var url = process.argv[2];

http.get(url,function(response){
  var content= "";
  response.setEncoding('utf8');

  response.on('data',function(data){
    console.log('recibi algunos datos');
    content+=data;
  });

  response.on('error',function(err){
    console.log('Encontramos un Error. '+err);
  });

  response.on('end',function(){
    console.log(content);
  });

});
