import React,{useState,useEffect} from 'react'

const Hooks = () => {

    const[color,setColor]=useState('yellow')
    const[numero,setNumero]=useState(0)
    const[lista,setLista]=useState([])
    const[listado,setListado]=useState({})
    const[contador,setContador]=useState(0)

    useEffect(()=>{
    let intervalo=setInterval(()=>{setContador(contador + 1)},1000)
    return()=> clearInterval(intervalo)
    },[contador])

    const fondo={
         backgroundColor:color,
         width:'100%',
         height:'1000px'
    }

    const cambiaColor=()=>{
        setColor('green')
    }
    const sumar=()=>{
        setNumero(numero + 1 )
    }

    return (
        <>
            <div style={fondo} className="container">

                <h1>{numero}</h1>
                <h1>Contador:{contador}</h1>

            <button onClick={cambiaColor}>Cambia Color</button>
            <button onClick={sumar}>Suma</button>
            </div>
        </>
    )
}

export default Hooks