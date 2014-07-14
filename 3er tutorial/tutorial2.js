var http = require('http');
var util = require('./util');
var myArray= [];
var otherArray=[];
for (var i = 2; i < process.argv.length; i++) {

    myArray[i-2]= process.argv[i];

};


var count= myArray.length;

for (var i = 0; i < myArray.length; i++) {
    makeGet(myArray[i], i);
};


function makeGet(url,i){
    
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
        otherArray[i]=content;
        count--;
      
        if(count==0)
          util.printAllData(content);
      });

    });


}