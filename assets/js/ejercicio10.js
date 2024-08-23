//10.Leer un número y calcular el 5% del número leído. Obtener tanto el número como el porcentaje 
//calculado.
function validar()
{
    
    let numero=parseInt(document.getElementById("numero").value);
    let porcentaje=(numero*5)/100;
    document.write(`El 5% de ${numero} es: ${porcentaje}`);
}