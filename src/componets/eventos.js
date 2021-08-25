import React, {Component} from "react";


export class EventosES6 extends Component{
constructor(props){
super(props);
this.state={
    contador:0,
}
this.sumar=this.sumar.bind(this);
this.restar=this.restar.bind(this);
}

sumar(e){
    this.setState({
        contador: this.state.contador+1
    })
}
restar(e){
    this.setState({
        contador: this.state.contador-1
    })
}
    render(){
        return(
            <div>
                <h2>Eventos en componentes de clases ES6</h2>
                <nav>
                    <button onClick={this.sumar }>+</button>
                    <button onClick={this.restar }>-</button>
                </nav>
                <h3>{this.state.contador}</h3>

            </div>
        );
    }

}

//refatorizar con Properties initializer

export class EventosES7 extends Component{

    state={
        contador:0,
    }
 
    //arrow function
    sumar = (e)=>{
        this.setState({
            contador: this.state.contador+1,
        });
    }

    restar= (e)=>{
        this.setState({
            contador: this.state.contador-1,
        });
    }

        render(){
            return(
                <div>
                    <h2>Eventos en componentes de clases ES7</h2>
                    <nav>
                        <button onClick={this.sumar.bind() }>+</button>
                        <button onClick={this.restar.bind() }>-</button>
                    </nav>
                    <h3>{this.state.contador}</h3>
    
                </div>
            );
        }
    
    }

// function Boton(props){
//     return (<button onClick={props.myOnClick} > Boton hecho componente</button>)
// }

//otimizar codigo

// const Boton = (props)=>(
//    <button onClick={props.myOnClick} > Boton hecho componente</button>
// );


//destructuracion
const Boton=({myOnClick})=>(
    <button onClick={myOnClick} > Boton hecho componente</button>
 );
 


//Eventos sinteticos, enventos para acceder a los eventos nativos de JavaScript, paso de parametros en eventos y eventos personalizados
export class MasSobreEventos extends Component{
    handleClick=(e,mensaje)=>{
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    };
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) =>this.handleClick(e,"Hola pasando parametro desde un evento")}> Saludar</button>
           {/* Evento personalizado */}
            {/* <Boton
            onClick={(e) =>
            this.handleClick(e,"Hola pasando parametro desde un evento")
            } 
            /> */}

            <Boton
            myOnClick={(e) =>
            this.handleClick(e,"Hola pasando parametro desde un evento")
            } 
            />
            </div>
        );
    }
}