import React from "react";

function Contador({number}) {

    const obj1 = {
        a: "a",
        b: "b",
        c: {
            d: "d"
            //Cuando estamos en esta parte del codigo copiando
            //la propiedad c en obj2, retrocedamos al crear
            //esta objeto como valor de una propiedad dentro
            //de obj1 lo que en realidad estoy haciendo es
            //creadon un referencia en un espacio en memoria dentro
            //del heap donde se almacena mi objeto nuevo
            //entonces el valor de la propiedad c es un apuntador
            //a ese espacio en memoria, donde se encuentra mi
            //objeto
            //entonces obj2 copia esta referencia, este apuntador
            //por ende ambos objetos estan hacien referencia
            //al mismo espacio en memoria
            //eso quiere decir que si con obj2 cambio el valor
            //de mi objeto estoy modficiendo la misma propiedad
            //en obj2
        }
    }

    const obj2 = {};

    for(prop in obj1) {
        obj2[prop] = obj1[prop];
    }



    return (
        <div>
            <h1
            >Contador</h1>
            <p>{number}</p>
        </div>
    )
}

export default Contador


///JAVASCRIPT TIENE UN LUGAR PARA GUARDAR Y BUSCAR
//EL NOMBRE DE LAS VARIABLES Y TIENE OTROOOO LUGAR
//PARA GUARRRRDAR LOS VALORES DE LA VARIABLE

//PERO OJO AUNQUE LOS NOMBRES Y VALORES DE MIS VARIABLES
//SE GUARDEN EN DISTINTOS LUGARES, AMBOS SIGUEN ESTANDO
//DENTRO DE LA MISMA MEMORIA STACK, EXEPTO CUANDO TRABAJAMOS
//CON OBJETOS

//CUANDO EL VALORES DE NUESTRAS VARIABLES ES UN OBJETO, EL
//VALOR QUE GUARDAMOS DE LA MEMORIA STACK NO ES EL OBJETO
//COMO TAL, SI NO QUE ES UN APUNTADOR Y ESTE APUNTADOR
//APUNTA AL VERDADERO LUGAR DONDE ESTA GUARDADO NUESTRO OBJETO
//ESO ES EN LA MEMORIA "HEAP0"

//cuando trabajos con objetos nuestro apuntador "el valor de nuestra
//variable, en realidad solo es otro apuntador a la memoria HEAP"
//Donde se encuentra el objeto real