//NOMBRE DE LAS ACCIONES
export const INCREMENT='INCREMENT'
export const DECREMENT='DECREMENT'


//CREADORAS DE ACCIONES 
export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}