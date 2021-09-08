import React,{createRef} from 'react'

const Refs = () => {

    const cambiarColor=createRef()

    const cambiarColorTitulo=()=>{
        cambiarColor.current.style.color='green'
    }
    
    return (
        <>
            <h1 ref={cambiarColor}>Estamos estudiando las Refs de React</h1>
            <button onClick={cambiarColorTitulo}>Cambiar Color</button>
        </>
    )
}

export default Refs