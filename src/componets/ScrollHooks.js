// useEffect
// Permite hacer uso del ciclo de vida en un componente funcional. Usar useEffect equivale a la combinación de los métodos:

// componentDidMount() (montaje).
// componentDidUpdate() (actualización).
// componentWillUnmount() (desmontaje).
// useEffect recibe como parámetro una función que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades.

// Para usarlo, debemos importarlo desde la librería

import React,  {useState, useEffect} from 'react'

export default function ScrollHooks(){
const [ScrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("Moviendo el Scroll");
 
    //detetar scroll
    const detectarScoll=()=>{
        setScrollY(window.pageYOffset);//para saber cuanto me he desplazado en y
    }

    //al objecto de la ventana le vas a asignar en el evento de scrooll la funcion de detectar scroll
    window.addEventListener("scroll", detectarScoll);


    //Cuando este componente no exita en la UX podemos eliminar este addEventListener
    return ()=>    {window.removeEventListener("scroll", detectarScoll);}
    },[ScrollY]);



    useEffect(() => {
        console.log("Fase de Montaje");
    
    },[]);

    useEffect(() => {
        console.log("Fase de actualizacion");
    
    });
    useEffect(() => {
        //cuando agregas esta sintaxis de retornar una funcion internamente react entiende que es demosntaje
        return ()=>{
            console.log("Fase de desmontaje");
        };
        
    });
 
return(
    <>
    <h2>Hooks-useEffect y ciclo de vida</h2>
    <p>Scroll Y del Navegador {ScrollY}px</p>
    </>
    );
}