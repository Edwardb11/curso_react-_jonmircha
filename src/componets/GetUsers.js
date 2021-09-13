import React from 'react' 
import {connect} from 'react-redux'
import { getUsers } from '../Redux/Actions/UserActions'
import {SyncLoader} from 'react-spinners'

const GetUsers = (props) => {

    const traerUsuarios=()=>{
        props.dispatch(getUsers())
    }

    return (
        <>
    
            <h1>Nuevos usuarios</h1>
            <button onClick={traerUsuarios}>Traer Usuarios</button>

             {props.users.enMarcha ? <SyncLoader/> : (<ul>

                 {props.users.users.map(user=>(

                     <li key={user.id}>{user.name}</li>
                 ))}
            
                 </ul> )}

       
            
        </>
    )
}

export default connect((state)=>{return state})
(GetUsers)