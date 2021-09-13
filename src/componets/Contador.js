import React from 'react'
import{connect} from 'react-redux'
import { increment,decrement } from '../Redux/Actions/CounterAction'

const Contador = ({increment,decrement,counter}) => {
    return (
        <>
        {/* Botones que van a disparar las funciones */}
        <h2>Contador con REDUX</h2>
         <button onClick={increment}>Incremento</button>
         <button onClick={decrement}>Decremento</button>
         <h1>{counter}</h1>
            
        </>
    )
}

//contador
const mapStateToProps=(state)=>{
    return{
        counter:state.contador
    }
}

//para disparar las funciones
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contador)