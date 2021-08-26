// Ciclo de vida
// 1 Montaje
// 2. Actualizacion
// 3. Desmontaje
import React, {Component} from "react";

export class Reloj extends Component{
    constructor(props){
        super(props);
    }

    // 3. Desmontaje
componentWillUnmount(){
    console.log(3, "El componente ha sido eliminado del DOM");
}
render(){
    return(
        <h3> {this.props.hora}</h3>
    );
}
}    


export default class Padre extends Component{
constructor(props){
    super(props);
    //Fase de montaje
    console.log(0, "El componente se inicializa AUN NO ESTA EN EL DOM")
//Reloj digital

this.state={
    hora:new Date().toLocaleTimeString(),
    visible:false
}

this.temporizador = null;
}

//2. Actualizacion

//Método de montaje, que solo se ejecuta en el lado del cliente.
//Se produce inmediatamente después del primer renderizado. Una
// vez se invoca este método ya están 
//disponibles los elementos asociados al componente en el DOM.
componentDidMount() {
    console.log(1,"El componente ya se enbcuentra en el DOM");

}
//Método de actualización que se ejecuta justamente después de haberse producido 
//la actualización del componente. En este paso los cambios ya están trasladados 
//al DOM del navegador, así que podríamos operar con el DOM para hacer nuevos cambios.
componentDidUpdate(prevProps,prevState){
    console.log(2,"El estado o los componentes han cambiado"); 
    console.log(prevProps);
    console.log(prevState);
}



//tictac una arrow funnction con un metodo de setintervar para el tiempo
//y guardar en una variable el temporizador  en el constructor iniciado en null




titac=()=>{
    this.temporizador =setInterval(() => {
        this.setState({
            hora:new Date().toLocaleTimeString()
        });
    }, 1000);
 
}

//metodos para iniciar y detener el reloj
iniciar =()=>{
   this.titac();
   this.setState({
    visible:true,
   });
};

detener =()=>{
    clearInterval(this.temporizador);
};

render(){
    console.log(4,"El componente se dibuja o redibuja por algun cambio en el DOM")
    return(
        <> 
        <h2>Ciclo de vida de los componentes de clase</h2>
       {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
        </>
    );
    }
}

