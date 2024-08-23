//3. La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se 
//clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, 
//ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por los 
//kilos de uva que entrega en un embarque, considerando lo siguiente: si es de tipo A, se le 
//cargan $2000 al precio inicial cuando es de tamaño 1; y 1000 si es de tamaño 2. Si es de tipo 
//B, se rebajan $500 cuando es de tamaño 1, y $900 cuando es de tamaño 2. (Considere un valor 
//inicial del kilo de uva de $ 2000, deberá calcular el valor total del embarque).
function validar ()
{
    let tamaño = parseInt(document.getElementById("tamaño").value);
    let tipo = document.getElementById("tipo").value;
    let cantidad= parseInt(document.getElementById("cantidad").value);
    tipo = tipo.toUpperCase()
    let valor;
    let total;
    if (tipo =="A" && tamaño ==1)
        {
            valor=4000;
            total=valor*cantidad;
            document.write(`El valor a pagar por la carga de uva tipo A tamaño 1, es de: ${total}`);
        }

        if (tipo =="A" && tamaño ==2)
            {
                valor=3000;
                total=valor*cantidad;
                document.write(`El valor a pagar por la carga de uva tipo A tamaño 2, es de: ${total}`);
            }

            if (tipo =="B" && tamaño ==1)
                {
                    valor=1500;
                    total=valor*cantidad;
                    document.write(`El valor a pagar por la carga de uva tipo B tamaño 1, es de: ${total}`);
                }

                if (tipo =="B" && tamaño ==2)
                    {
                        valor=1100;
                        total=valor*cantidad;
                        document.write(`El valor a pagar por la carga de uva tipo B tamaño 2, es de: ${total}`);
                    }
        
}