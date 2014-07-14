var http = require('http');
var util = require('./util');
var myArray= [];

for (var i = 2; i < process.argv.length; i++) {

    myArray[i-2]= process.argv[i];

};

var count= myArray.length;

for (var i = 0; i < count; i++) {
    makeGet(myArray[i]);
};


function makeGet(url){
    
    http.get(url,function(response){
      var content= "";
      response.setEncoding('utf8');

      response.on('data',function(data){
        content+=data;
      });

      response.on('error',function(err){
        console.log('Encontramos un Error. '+err);
      });

      response.on('end',function(){
        console.log("Contenido Recibo de: "+ url +"; " +content);
      });

    });


}