import React from "react";
import "../hojas-de-estilo/Boton.css"
function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != ".") && (valor != "="); //si no es un numero
        //y si no es u punto o igual, lo consideramos como un operador  
        } 
    return (
        <div
        className={ `boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd() }
        onClick={() => props.manejarClick(props.children)}
        >
            {props.children}
        </div>
    )
}

export default Boton;