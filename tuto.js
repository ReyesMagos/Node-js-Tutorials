console.log(suma(process));

function suma(process){
	var suma=0;
	for(i=2; i< process.argv.length;i++){
		suma+= Number(process.argv[i]);
	}
	
	return suma;
}