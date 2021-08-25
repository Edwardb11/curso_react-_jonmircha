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