//6. Ingrese dos números desde el teclado e imprima solo los positivos.
'use strict'
function validar()
{
    let numero =parseInt(document.getElementById("numero").value);
    let numero2= parseInt(document.getElementById("numero2").value);
    if(numero>0)
        {
        document.write(`${numero}\n`); 
        }
    if(numero2>0)
        {
            document.write(`\n ${numero2}` );
        }
}