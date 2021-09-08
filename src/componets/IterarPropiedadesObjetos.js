import React, { Component } from 'react';

class IterarPropiedadesObjetos extends Component {
    render() {

     const animal={
           
           nombre:'coco',
           especie:'delfin',
           edad:5,
           acuario:'Valencia',
           adiestrador:'Marcello'
    }

    const key=Object.keys(animal)



        return (
            <>
            <h2>IterarPropiedadesObjetos</h2>
             <ul>
               {key.map(k=>(
               
               <li> {k}:{animal[k]}</li>
               
               ))}
             
                 
            </ul>   
            </>
        );
    }
}

export default IterarPropiedadesObjetos;