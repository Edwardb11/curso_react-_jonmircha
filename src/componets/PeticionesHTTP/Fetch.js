import React,{useState,useEffect} from 'react'

const Fetch = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        const cargarUsuarios=async()=>{

         const res=await fetch('https://jsonplaceholder.typicode.com/users')
         const data=await res.json()
         setUsers(data)
         console.log(data)
        }
        cargarUsuarios()
    
     },[])
    
    return (
        <>
        <h2>Peticiones HTTP con FETCh</h2>
            <ul>
                {users.map(user=>(
                 
                 <li key={user.id}>
                         Nombre:{user.name}<br/>
                         Apellido:{user.username}<br/>
                         Email:{user.email}
                 </li>
                ))
                }
            </ul>
        </>
    )
}

export default Fetch