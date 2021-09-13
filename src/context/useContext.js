import React,{createContext,useState,useEffect} from 'react'

//creamos contexto
export const UserContext=createContext()

//creamos el provider
const UserProvider=(props)=>{

 const[users,setUsers]=useState([])


 useEffect(()=>{

    const getData=async()=>{

        const res=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await res.json()
        setUsers(data)



    }
    getData()

},[])

return(

   <UserContext.Provider 
         
   value={{users}}>



       {props.children}
   </UserContext.Provider>




)




}

export default UserProvider