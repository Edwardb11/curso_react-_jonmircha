export const PETICION_EN_MARCHA='PETICION_EN_MARCHA'
export const PETICION_EXITOSA='PETICION_EXITOSA'
export const PETICION_ERRONEA='PETICION_ERRONEA'


export const getUsers=()=>(dispatch)=>{
    dispatch({type:PETICION_EN_MARCHA})


fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users=>{
    dispatch({
       type:PETICION_EXITOSA,
       payload:{
           users
       }
    })
})
.catch(error=>{
    dispatch({
        type:PETICION_ERRONEA,
        error:error.toString()
    })
})

}