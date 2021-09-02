import React from 'react';
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";
export default function Estilos(){
    let myStyle={
        borderRadius:"5rem",
        margin:"2rem",
        maxWidth:"50%"
    }
    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={{borderRadius:"25rem", margin:"1rem"}}>Estilos en linea(atributo style)</h3>
            <h3 className="bg-react" style={myStyle}>Estilos en linea</h3>
            <h3 className="bg-react"> Agregando Normalize con
            <br/>
            <code>@import-normalize;</code>
            </h3>
         
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            <h3 className={"bg-sass"}>Estilos con SCSS</h3>
        </section>
    )
}