import React, {useState} from 'react';

export default function ContadorHooks(props){
    //variable se llama contador y la funcion que lo actua;ize se llamara setContador
    //el valor iniciar puede pasarse por variable o directamente cualquier tipo d datos
    const [contador, setContador] = useState(0)
// console.log(useState());

    // arrow function para sumar y resta solo es utilizar la funcion para actualizar el estado +1
const sumar = () => setContador(contador+1);
const restar = () => setContador(contador-1);

    return(
        <>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        {/* variable d estado */}
        <h3>{contador}</h3>
        <p>Contador de {props.titulo}</p>
        </>
    );
}

//propiedades por defectos 
// Nombre del componente y de manera de objectos darle las propiedades que tiene
ContadorHooks.defaultProps={
    titulo:"clicks",
};