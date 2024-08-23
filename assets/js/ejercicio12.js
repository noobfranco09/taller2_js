//2. “La langosta ahumada” es una empresa dedicada a ofrecer banquetes; sus tarifas son las 
//siguientes: el costo de platillo por persona es de $14.000, pero si el número de personas es 
//mayor a 200 pero menor o igual a 300, el costo es de $11.000. Para más de 300 personas el 
//costo por platillo es de $9.000. Se requiere una WebApp que ayude a determinar el 
//presupuesto que se debe presentar a los clientes que deseen realizar un evento.
function validar()
{
    let personas=parseInt(document.getElementById("personas").value);
    if(personas>0 && personas<=200)
    {
        let platillo=14000;
        let platillo1=platillo*personas;
        document.write(`El precio a pagar por ${personas} platillos, es de: ${platillo1}`)
    }
    if(personas>200 && personas <= 300)
    {
        let platillo= 11000;
        let platillo1=platillo*personas;
        document.write(`El precio a pagar por ${personas} platillos, es de: ${platillo1}`)
    }

    if(personas>300)
        {
            let platillo=9000;
            let platillo1=platillo*personas;
            document.write(`El precio a pagar por ${personas} platillos, es de: ${platillo1}`)
        }


}