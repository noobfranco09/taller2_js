//4. El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto
//debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente: si son
//100 alumnos o más, el costo por cada alumno es de $6.500; de 50 a 99 alumnos, el costo es
//de $7.000, de 30 a 49, de $9.500, y si son menos de 30, el costo de la renta del autobús es de
//$400.000 dividido entre los alumnos.

function validar()
{
    let estudiantes =parseInt(document.getElementById("estudiante").value);
    let valor,total;
    if(estudiantes>=100)
        {
            valor=6500;
            total=valor*estudiantes;
            document.write(`El valor a pagar por ${estudiantes} estudiantes es de ${total}`)
        }

        if(estudiantes>=50 && estudiantes<=99)
            {
                valor=7000;
                total=valor*estudiantes;
                document.write(`El valor a pagar por ${estudiantes} estudiantes es de ${total}`)
            }

            if(estudiantes>=30 && estudiantes<=49)
                {
                    valor=9500;
                    total=valor*estudiantes;
                    document.write(`El valor a pagar por ${estudiantes} estudiantes es de ${total}`)
                }
                if(estudiantes<30)
                    {
                        valor=400000/estudiantes;
                        total=valor*estudiantes;
                        document.write(`El valor a pagar por ${estudiantes} estudiantes es de ${total}`)
                    }

}