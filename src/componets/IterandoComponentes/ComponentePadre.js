import React from 'react'
import Nombres from './Nombres'

const ComponentePadre = () => {
    const nombres=['Luis','Carlos','Angel']
    return (
        <>
        <h2>Iterando componente mediante el padre</h2>
        <ul>
            {nombres.map(nombre=>(
             <> 
              <Nombres nombres={nombre}/>
             </>
            ))}
        </ul>  
        </>
    )
}
export default ComponentePadre
