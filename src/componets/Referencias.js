import React, {createRef, useRef} from 'react'

export default function Referencias(){
   // let refMenu=createRef(), //para componentes de clases
    let refMenu=useRef(), //para hooks
    refMenuBtn=useRef(); //para hooks

    //console.log(refMenu,refMenuBtn);

    const handletooggleMenu =(e)=>{
    //     const $menu =document.getElementById("menu");
    //     if(e.target.textContent === "Menu"){
    //         e.target.textContent="Cerrar";
    //         $menu.style.display="block"
    //     }else{
    //         e.target.textContent="Menu";
    //         $menu.style.display="none"
    //     }

    //para hacerlo con referencias
    if (refMenuBtn.current.textContent === "Menu") {
        refMenuBtn.current.textContent = "Cerrar";
        refMenu.current.style.display = "block";
      } else {
        refMenuBtn.current.textContent = "Menu";
        refMenu.current.style.display = "none";
      }
    };
    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handletooggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                {/* a*5{Seccion $}+br */}
                <a href="#"> Seccion 1</a>
                <br/>
                <a href="#"> Seccion 2</a>
                <br/>
                <a href="#"> Seccion 3</a>
                <br/>
                <a href="#"> Seccion 4</a>
                <br/>
                <a href="#"> Seccion 5</a>
              


            </nav>
        </>
    )
}