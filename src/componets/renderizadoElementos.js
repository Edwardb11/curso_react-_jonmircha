import React, {Component} from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
    return(
        <li>
            <a href={props.el.url} target="_blank">{props.el.name} </a>
        </li>
    )
}


export default class RenderizadoElementos extends Component{
constructor(props){
    super(props);
    this.state={
        seasons:["Primavera", "Verano","Otorño","Invierno"],
    };
}

render(){
    console.log(data);
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

            <h3>
                Frmework Fronted javaScript
            </h3>
            <ul>
               {
                    data.frameworks.map((el)=> (
                        <ElementoLista key={el.id} el={el}/>
                    )
                    )
               }
            </ul>
        </div>
    );
}
}