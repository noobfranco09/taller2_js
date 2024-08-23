//9. Ingrese dos números desde el teclado. Calcule la suma e imprima los números leídos y la suma.
function validar()
{
    
    let numero=parseInt(document.getElementById("numero").value);
    let numero1=parseInt(document.getElementById("numero2").value);
    let suma = numero+numero1;
        document.writeln(` La suma de ${numero} y ${numero1} es: ${suma}`);
}