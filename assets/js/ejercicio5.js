//5. Ingrese un número y calcule e imprima su raíz cuadrada. Si el número ingresado es negativo 
//imprima el número y un mensaje que diga “ este número tiene raíz imaginaria”.
function validar()
{
    let numero=parseInt(document.getElementById("numero").value);
    if(numero>0)
        {
            let raiz=Math.sqrt(numero)
            document.write(raiz)
        }
        else
        {
            document.write("este número tiene raíz imaginaria")
        }
    
    document.write(`El valor absoluto de ${numero} es: ${valorAbsoluto}`)
}