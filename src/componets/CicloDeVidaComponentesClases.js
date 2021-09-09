import React,{Component} from 'react';

class CicloDeVidaComponentesClases extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            nombre:'Alberto',
            evento:null
        }
    }

    cambiarNombre(){
        this.setState({nombre:'Carlos'})
    }

    
    componentDidMount(){
        //peticiones http 
        //eventos 
          this.state.evento=window.addEventListener('resize',()=>{
            console.log(window.innerWidth)
        })
    }
    
    componentDidUpdate(prevProps,prevState){
       if(prevState===this.state){
           console.log('El estado no ha cambiado')
       }else{
           console.log('El estado ha cambiado')
           console.log(this.state.nombre)
       }

    }
    
    
    
    
    componentWillUnmount(){

         window.removeEventListener(this.state.evento)
    }
    
    render() { 
        return (  
            
            <>
            <h2>Ciclo De Vida Componentes Clases</h2>
           <button onClick={this.cambiarNombre.bind(this)}>Pulsa</button>
            
            </>


        );
    }
}
 
export default CicloDeVidaComponentesClases;