import React,{useContext} from 'react'
import {UserContext} from '../context/useContext'

const Context = () => {

    const{users}=useContext(UserContext)

    console.log(users)

    return (
        
        <>
        <ul>
            {users.map(user=>(
                
                <li key={user.id}>Name:{user.name}<br/> 
                                  Username:{user.username}<br/>    
                                  Email:{user.email}           
                </li>


            ))}
        </ul>
            
        </>
    )
}

export default Context