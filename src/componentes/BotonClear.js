import React from "react";
import Boton from "./Boton";
import "../hojas-de-estilo/BotonClear.css"

const BotonClear = props => {
    return (
        <div
        className="boton-clear"
        onClick={() => props.manejarClick("")}
        >
            {props.children}
        </div>
    )
}

export default BotonClear;