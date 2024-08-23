'use strict'
//Ingresar por formulario el nombre y la edad de cualquier persona, la app (aplicación) deberá 
//imprimir los datos ingresados(nombre, edad) solo si la persona es mayor de edad; en caso 
//contrario la app deberá imprimir el mensaje “Eres menor de edad, no puedes usar esta APP”.

'use strict';
function validar() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (edad > 18) 
    {
        document.write(`${nombre} ${edad}`);
    } 
    else 
    {
        document.write("Eres menor de edad,no puedes usar esta app");
    }
}
