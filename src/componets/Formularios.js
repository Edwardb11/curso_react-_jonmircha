import React, { useState } from 'react'

// export default function Formularios(){
//     //variables de estados para actualizar
//     const [nombre, setNombre] = useState("")
//     const [sabor, setSabor] = useState("")
//     const [lenguaje, setLenguaje] = useState("")
//     const [terminos, setTerminos] = useState(false)
//     const handleSubmit = e =>{
//         e.preventDefault();
//         alert("El formulario se ha enviado");
//     }
    
//     return (
//     <>
//         <h2>Formularios</h2>
//         <form onSubmit={handleSubmit}>
//             {/* type text */}
//             <label htmlFor="nombre">Nombre: </label>
//             <input 
//             type="text" 
//             id="nombre" 
//             name="nombre"
//             value={nombre}
//             onChange={(e)=> setNombre(e.target.value)}>
//             </input> 
//             {/* input controlado mediante la varuable de estdo */}

//             {/* type radio */}
//             <p>Elige tu sabor JS favorito</p>
//             <label for="vanilla">Vanilla</label>
//             <input 
//             type="radio"
//             id="vanilla" 
//             name="sabor" 
//             value="vanilla" 
//             onChange={(e)=> setSabor(e.target.value)}
//             defaultChecked>  
//             </input>

//             <label for="react">React</label>
//             <input 
//             type="radio"
//             id="react" 
//             name="sabor" 
//             value="react" 
//             onChange={(e)=> setSabor(e.target.value)}>
//             </input>

//             <label for="angular">Angular</label>
//             <input 
//             type="radio"
//             id="angular" 
//             name="sabor" 
//             value="angular" 
//             onChange={(e)=> setSabor(e.target.value)}>
//             </input>

//             <label for="vue">Vue</label>
//             <input 
//             type="radio"
//             id="vue" 
//             name="sabor" 
//             value="vue" 
//             onChange={(e)=> setSabor(e.target.value)}>
//             </input>

//             <label for="Sveite">Sveite</label>
//             <input 
//             type="radio"
//             id="Sveite" 
//             name="sabor" 
//             value="Sveite" 
//             onChange={(e)=> setSabor(e.target.value)}>
//             </input>
//             {/* type select */}
//             <select name="lenguaje" onChange={(e)=>setLenguaje(e.target.value)} defaultValue="">
//                 <option value="">-----</option>
//                 <option value="js">JavaScript</option>
//                 <option value="php">PHP</option>
//                 <option value="py">Pythn</option>
//                 <option value="go">GO</option>
//                 <option value="rb">Ruby</option>
//                 <option value="c">C</option>
//             </select>

//             {/* Radio boton */}

//             <label htmlFor="terminos">Acepto terminos y condiciones</label>
//                 <input
//                 type="checkbox"
//                 id="terminos"
//                 name="terminos"
//                 onChange={(e)=>setTerminos(e.target.checked)}
//                 >
//                 </input>

        
//         {/* Submit */}
//         <input type="submit"></input>
//         </form>
//     </>
//     )
// }


export default function Formularios(){
    //variables de estados para actualizar
    const [form, setForm] = useState({})
    const handleChange =e=>{
        setForm({
            ...form,
        [  e.target.name]: e.target.value   // para actualizar con el valor
        })
    }
    
    const handleCheked =e=>{
        setForm({
            ...form,
        [  e.target.name]: e.target.checked   // para actualizar true o false
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }
    
    return (
    <>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            {/* type text */}
            <label htmlFor="nombre">Nombre: </label>
            <input 
            type="text" 
            id="nombre" 
            name="nombre"
            value={form.nombre}
            onChange={handleChange}>
            </input> 
            {/* input controlado mediante la varuable de estdo */}
            <br/>
            {/* type radio */}
            <p>Elige tu sabor JS favorito</p>
            <label for="vanilla">Vanilla</label>
            <input 
            type="radio"
            id="vanilla" 
            name="sabor" 
            value="vanilla" 
            onChange={handleChange}
            defaultChecked>  
            </input>

            <label for="react">React</label>
            <input 
            type="radio"
            id="react" 
            name="sabor" 
            value="react" 
            onChange={handleChange}>
            </input>

            <label for="angular">Angular</label>
            <input 
            type="radio"
            id="angular" 
            name="sabor" 
            value="angular" 
            onChange={handleChange}>
            </input>

            <label for="vue">Vue</label>
            <input 
            type="radio"
            id="vue" 
            name="sabor" 
            value="vue" 
            onChange={handleChange}>
            </input>

            <label for="Sveite">Sveite</label>
            <input 
            type="radio"
            id="Sveite" 
            name="sabor" 
            value="Sveite" 
            o onChange={handleChange}>
            </input>

            <br/>
            {/* type select */}
            <select name="lenguaje"  onChange={handleChange} defaultValue="">
                <option value="">-----</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Pythn</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
                <option value="c">C</option>
            </select>

            {/* Radio boton */}
            <br/>
            <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input
                type="checkbox"
                id="terminos"
                name="terminos"
                onChange={handleCheked}
                >
                </input>

                <br/>
        {/* Submit */}
        <input type="submit"></input>
        </form>
    </>
    )
}