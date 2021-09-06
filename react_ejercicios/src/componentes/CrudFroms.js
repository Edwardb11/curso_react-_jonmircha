import React, { useState, useEffect } from "react";
const inicialForm={
    name:"",
    constellation:"",
    id:null,
};

const CrudFroms = ({ CreateData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(inicialForm)

//cuando detecte que dataTpEdit haya cambiado
    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        }
        else{
            setForm(inicialForm);
        }
    }, [dataToEdit])

    //para controlar todos los posibles cambios
    const handleChange =(e)=>{
        setForm({
           ...form,
          [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!form.name || !form.constellation) {
          alert("Datos incompletos");
          return;
        }
        if (form.id === null) {
            CreateData(form);
          } else {
            updateData(form);
          }
      
          handleReset();
    }
    const handleReset =(e)=>{
        setForm(inicialForm);
        setDataToEdit(null);
    }
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
                name="constellation"
                placeholder="constellation" 
                onChange={handleChange} 
                value={form.constellation}/>

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
