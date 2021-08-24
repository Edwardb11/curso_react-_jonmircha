import React, {Component} from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>
                {props.contadprHijo}
            </h3>
        </div>
    )
}


export default class Estado extends Component{
  
constructor(props){
    super(props);
    this.state={
        contador: 0,
    };
//par actualizar el estado cada 1 segundos
setInterval(() => {
    this.setState({
     contador:this.state.contador+1
    }) 
 }, 1000);
}



render(){
        return(
            <div>
            <h2>
                El State
            </h2>
            <p>{this.state.contador}</p>
            <EstadoAHijo contadprHijo={this.state.contador} />
        </div>
       
        ); 
    }
}