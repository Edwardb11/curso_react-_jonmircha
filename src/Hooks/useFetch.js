import  { useState, useEffect } from 'react'
export const useFetch=(url)=>{
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)


    //se va a ejecutar cuando cambia la variable url y va a retornar un objecto con el valor de la data
useEffect(() => {
      //funcion asincrona porque no se puede poner asincrona UsseEfect
      const getData = async (url) => {
        try {
            let res = await fetch(url);

            if(!res.ok){ //significa que hubo un error
            throw{  //crear un objecto para el error
                err:true, //propiedad err para representar el error
                status: res.status, //status es de fetch 
                statusText: !res.statusText  ? "Ocurrio un error" : res.statusText //statustext es el posible msj que me devuelva la API
                }
            }
            let data = await res.json();
            setisPending(false); //cambiar el estado
            setData(data);
            setError({err:false});

        } catch (err) {
            setisPending(true); //cambiar el estado
            setError(err);
      
        }
      };
  
      getData(url);
}, [url])
return {data,isPending,error}
}
