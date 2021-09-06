import React, { useState, useEffect } from "react";



const inicialForm={
    name:"",
    Contelacion:"",
    id:null,
};

const CrudFroms = () => {
    const [form, SetForm] = useState(inicialForm)

    //para controlar todos los posibles cambios
    const handleChange =(e)=>{}
    const handleSubmit =(e)=>{}
    const handleReset =(e)=>{}
    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="name"
                placeholder="Nombre" 
                onChange={handleChange} 
                value={form.name} / >

                <input 
                type="text" 
                name="Contelacion"
                placeholder="Contelacion" 
                onChange={handleChange} 
                value={form.Contelacion}/>

                <input 
                type="submit" 
                value="Enviar"/>

                <input 
                type="reset" 
                value="Limpiar"
                onClick={handleReset} />

            </form>
        </div>
    );
}

export default CrudFroms
