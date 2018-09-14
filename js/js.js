var nombrecliente;
var apellidocliente;
var fechadeNacimiento;
var hombre;
var mujer;
var otro;
var emailv;
var contrasenyav;
var movilv;
var hoy;


function validar(){
    console.log("Checking");
    
    nombrecliente = document.getElementById("nombre").value;
    apellidocliente= document.getElementById("apellido").value;
    hombre = document.getElementById("qv1").checked;
    mujer = document.getElementById("qv2").checked;
    otro= document.getElementById("qv3").checked;
    emailv = document.getElementById("email").value;
    contrasenyav =  document.getElementById("contraseña").value;
    movilv =  document.getElementById("movil").value;

   
	if( nombrecliente.trim()==""){
		alert("DEBE INTRODUCIR SU NOMBRE");
	}else if(apellidocliente.trim()==""){
		alert("DEBE INTRODUCIR SUS APELLIDOS");
	}else if(hombre==false & mujer==false & otro==false){
		alert("DEBE INTRODUCIR UN GÉNERO");
	}else if(emailv.trim()==""){
		alert("DEBE INTRODUCIR SU E-MAIL");
	}else if(contrasenyav.trim()==""){
		alert("DEBE INTRODUCIR SU CONTRASEÑA");
	}else if(movilv.trim()==""){
		alert("DEBE INTRODUCIR SU NÚMERO DE MOVIL");
		

    }else{
		console.log(nombrecliente,apellidocliente,emailv,contrasenyav,movilv);
		alert("SE HA REGISTRADO CORRECTAMENTE");

	 } 
	mayorDeEdad();
}


function mayorDeEdad(){
	console.log("Calculating age");

	hoy =new Date();
	var anyoActual = hoy.getFullYear();
	console.log(anyoActual);
    fechadeNacimiento = Number(document.getElementById("date").value);
    console.log(fechadeNacimiento);
	var edad = anyoActual- fechadeNacimiento;
	console.log(edad);

	if(edad<18){
	 alert(" LA EDAD MINÍMA DEBE SER DE 18 AÑOS, TIENES " + edad + " AÑOS ");
	}
}
