//4. Ingrese un numero e imprima el número y el valor absoluto del mismo
function validar()
{
    let numero=parseInt(document.getElementById("numero").value);
    if(numero>0)
        {
            document.write(numero)
        }
        else
        {
            let valorAbsoluto = numero*(-1);
            document.write(valorAbsoluto)
        }
    
    document.write(`El valor absoluto de ${numero} es: ${valorAbsoluto}`)
}