import logo from './logo.svg';
import './App.css';
import Componente from "./componets/componente";
import Propiedades from "./componets/propiedades";
import Estado from "./componets/estado";
import RenderizadoCondicional from "./componets/RenderizadoCondicional";
import RenderizadoElementos from "./componets/renderizadoElementos";
import { EventosES6, EventosES7,MasSobreEventos } from "./componets/eventos";
import ComunicacionComponentes from "./componets/ComunicacionComponentes";
import CicloVida from "./componets/CicloVida";
import AjaxApis from "./componets/AjaxApis";
import ContadorHooks from "./componets/contadorHooks";
import ScrollHooks from "./componets/ScrollHooks";
import RelojHooks from "./componets/RelojHooks";
import AjaxHooks from "./componets/AjaxHooks";
import HooksPersonalizados from './componets/HooksPersonalizados';
import Referencias from './componets/Referencias';
import Formularios from './componets/Formularios';
import Estilos from './componets/Estilos';
import ComponentesEstilizados from './componets/ComponentesEstilizados';
import StylesComponents from './componets/StylesComponents';
import Refs from './componets/Refs';
import Formulario from './componets/FormularioValidar';
import Eventos2 from './componets/Eventos2';
import SpreadOperator from './componets/SpreadOperator';
import IterandoArray from './componets/IterandoArray';
import IterarPropiedadesObjetos from './componets/IterarPropiedadesObjetos';
import ComponentePadre from './componets/IterandoComponentes/ComponentePadre';


// import { Components } from 'react';


function App() {
  let nombre = "Edward";
  let auth= false;
  let estaciones =["Primavera","Verano", "Otoño", "Invierno"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor='nombre'>Nombre</label>
        < input type='text' id='nombre' />
        <h1>{nombre}</h1>
        <p>{auth ? "El usuario esta logueado" : "El usuario No esta logueado"}</p>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <ul>
         { estaciones.map((el, index) => (
           <li key={index}>{el}</li>
         ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <Componente msg=" Hola soy un componente funcional de una pro"/>
     <hr></hr>
      <Propiedades cadena="Esto es una cadena de texto"
      numero={19}
      booleano={true}
      arreglo={[1,2,3]} 
     objecto={{nombre:"Edward", Correo:"edward@hotmail.com"}} 
     funcion={ num => num*num}
     elementoReact ={<i>Esto es un elemento de react italica</i>}
     componenteReact ={<Componente msg="Soy un componente paso como prop"/>}
     />
    <hr></hr>
    <Estado/>

    <hr></hr>
    <RenderizadoCondicional/>

    <hr></hr>
    <RenderizadoElementos/>

    <hr></hr>
    <EventosES6/>

    <hr></hr>
    <EventosES7/>

    <hr></hr>
    <MasSobreEventos/>

    <hr></hr>
    <ComunicacionComponentes/>

    <hr></hr>
    <CicloVida/>

    <hr></hr>
    <AjaxApis/>

    <hr></hr>
    {/* se reemplaza la propiedad por defecto */}
    <ContadorHooks titulo='Seguidores'/>

    <hr></hr>
    <ScrollHooks/>

    <hr></hr>
    <RelojHooks/>

    <hr></hr>
    <AjaxHooks/>

    <hr></hr>
    <HooksPersonalizados/>

    <hr></hr>
    <Referencias/>

    <hr></hr>
    <Formularios/>

    <hr></hr>
    <Estilos/>

    <hr></hr>
    <ComponentesEstilizados/>

    <hr></hr>
    <StylesComponents/>

    <hr></hr>
    <Refs/>
    
    <hr></hr>
    <Formulario/>

    <hr></hr>
    <Eventos2/>

    <hr></hr>
    <SpreadOperator/>

    <hr></hr>
    <IterandoArray/>

    <hr></hr>
    <IterarPropiedadesObjetos/>

    <hr></hr>
    <ComponentePadre/>

     </section>
    </div>
    );
}

export default App;
