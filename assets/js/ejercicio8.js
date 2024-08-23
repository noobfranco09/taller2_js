//8. Ingrese dos números desde el teclado e imprima ambos números solo si son distintos de cero.
function validar()
{
    
    let numero=parseInt(document.getElementById("numero").value);
    let numero1=parseInt(document.getElementById("numero2").value);

    if(numero != 0 && numero1 != 0)
        {
            document.writeln(` <br>${numero}</br>`);
            document.writeln(` <br>${numero1}</br>`);
        }
}