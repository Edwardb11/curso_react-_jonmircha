import React, {Component} from "react";



export default class Padre extends Component{
state ={
    contador:0,
};
//arrow functions
incrementarContador = (e)=>{
    this.setState({
    contador: this.state.contador+1
    });
}


render(){
    return(
    <section>

    <h2>Comunicacion entre componentes</h2>  
    <p>Contador <b>{this.state.contador}</b></p>
    {/* Comunicacion entre un componente padre a uno hijo         */}
    {/* cuando quieres pasar informacion de un componente padre a uno hijo es mendiante las props
    se pasa diferentes tipos de datos funciones, arreglos etc.. em este caso fue co un msj */}
    <Hijo  incrementarContador={this.incrementarContador}  mensaje="Mensaje para el hijo 1" / >
    
     {/* Comunicacion entre un componente hijo a uno padre    en este caso es con el contador     */}
    <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" / >
    </section>
    );
  }
}

     {/* Comunicacion entre un componente hijo a uno padre         */}
     function Hijo(props){
    return(
    <>
     <h3>{props.mensaje} </h3>
    <button onClick={props.incrementarContador}>+</button>
</>
    );
}

{/* Comunicacion entre un componente hijo a su padre */}