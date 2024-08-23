function validar ()
{
    let longitud = parseFloat(document.getElementById("longitud").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let anchura = parseFloat(document.getElementById("anchura").value);
    let estrato = parseFloat(document.getElementById("estrato").value);
    let cubos = altura*anchura*longitud;

    if(estrato==1)
        {
            cubos=cubos*5000;
            document.write(`El valor a pagar es de ${cubos}`);
        }
    if(estrato==2)
        {
            cubos=cubos*6500;
            document.write(`El valor a pagar es de ${cubos}`);
        }
    if(estrato==3)
        {
            cubos=cubos*7000;
            document.write(`El valor a pagar es de ${cubos}`);
        }
    if(estrato==4)
        {
            cubos=cubos*8000;
            document.write(`El valor a pagar es de ${cubos}`);
        }
    if(estrato==5)
        {
            cubos=cubos*9200;
            document.write(`El valor a pagar es de ${cubos}`);
        }
}