import React, {Component} from "react";


export default class RenderizadoElementos extends Component{
constructor(props){
    super(props);
    this.state={
        seasons:["Primavera", "Verano","Otorño","Invierno"],
    };
}

render(){
    return(
        <div>
            <h2> Renderizado de Elementos</h2>
            <h2> Estaciones del año</h2>
            <ol>
                {/* li se van a generar dinamicamente */}
                {this.state.seasons.map((el,index)=>(
                    <li key={index} >{el} </li>
                    // por cada elemento generar una <li>
                ) )}
            </ol>
        </div>
    );
}
}