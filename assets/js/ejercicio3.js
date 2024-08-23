//3. Ingresar por formulario el nombre, la edad y el sexo de cualquier persona, la app deberá imprimir 
//la información solo si la persona es de sexo masculino y mayor de edad
//NOTA: suponga que en el campo denominado sexo el numero 1 equivale a masculino y
//el numero 2 equivale a femenino.
'use strict';
function validar() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let sexo = parseInt(document.getElementById("sexo").value);

    if (edad >= 18 && sexo==1) 
    {
        document.write(`${nombre} ${edad}`);
    } 
    
}
