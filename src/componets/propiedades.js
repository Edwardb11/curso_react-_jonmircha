import { checkPropTypes } from "prop-types";
import React from "react";


export default function Propiedades(props){
return(
    <div>
        <h2>{props.PorDefecto}</h2>

        <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li> 
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li> 
        <li>{props.objecto.nombre + " - "+props.objecto.Correo}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li> 
        {/* le paso como parametro la funcion que me retornara una arrow funcion comn uma multiplicacion */}
        <li>{props.elementoReact}</li> 
        <li>{props.componenteReact}</li> 

        


        </ul>
    </div>
);
}

Propiedades.defaultProps={
    PorDefecto:'Las pro',
};

Propiedades.prototype={
    numero: checkPropTypes.number,
};