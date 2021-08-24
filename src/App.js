import logo from './logo.svg';
import './App.css';
import Componente from "./componets/componente";
import Propiedades from "./componets/propiedades";
import Estado from "./componets/estado";
import RenderizadoCondicional from "./componets/RenderizadoCondicional";
import RenderizadoElementos from "./componets/renderizadoElementos";

//import { Components } from 'react';


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
     
      </section>
    </div>
  );
}

export default App;
