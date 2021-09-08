import React, { Component } from 'react';


class Eventos2 extends Component {
    constructor(props) {
        super(props);

    }
   /*
   onFocus(cuando un input esta activado o en foco)
   onBlur(cuando pulsamos fuera de un input que esta en foco)
   onChange(Cuando hay un cambio en el componente o input)
   onClick(Cuando se hace un click en el raton sobre el elemento)
   onDoubleClick(Cuando se hace un click en el raton sobre el elemento(nativamente no funciona en moviles))
   onKeyDown(Cuando pulsamos un botón del teclado )
   onKeyPress(Cuando presionamos una tecla)
   onMouseDown(Cuando presionamos el boton del mouse mouse hacia abajo)
   onMouseOver(Cuando pasamos por encima el ratón )
   onMouseLeave(Cuando salimos del elemento)
   */ 
    

    render() {
        return (
            <>
            
            <form>
                 <input onMouseLeave={()=>alert('he salido')} type="text" />

            </form>

            <button >Pulsame</button>


   


            </>
        );
    }
}



export default Eventos2;