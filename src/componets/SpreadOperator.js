import React, { Component } from 'react';

class SpreadOperator extends Component {
    render() {

        const mascotas=['perro','loro','gato']
        const salvajes=['leon','cebra','chimpace']

        const animales=[...mascotas,...salvajes]


        const paises={

               Italia:'Sandra',
               Francia:'Felipa',
               Luxemburgo:'Sonia',
               Spain:'Carmen'
              
        }

        const paises2={
              
              Alemania:'Guillerma',
              modeloSpain:{
                Spain:'Alicia'
              },
               EstadosUnidos:'Emilli',
              Argentina:'Carla'

        }

        const totalPaises={...paises,...paises2}

        console.log(totalPaises)

        console.log(animales)

        return (
            <>
                <h1>hola desde spreed</h1>
            </>
        );
    }
}

export default SpreadOperator;