import React, { useState } from 'react';
import CrudFroms from './CrudFroms';
import CrudTable from './CrudTable';

const initialDb=[
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
      },
      {
        id: 2,
        name: "Shiryu",
        constellation: "Dragón",
      },
      {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
      },
      {
        id: 4,
        name: "Shun",
        constellation: "Andrómeda",
      },
      {
        id: 5,
        name: "Ikki",
        constellation: "Fénix",
      },
    ];


const CrudApp = () => {
    const [db, setDb] = useState(initialDb);

    //variable de estado
    //si esta nulo significa insercion de dato y si esta true es una edicion
    const [dataToEdit, setDataToEdit] = useState(null);
    const CreateData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
    const updateData=(data)=>{
        //usar un map y cuando detecte que sea justamente ese id se para y modifique esa posicion
        let newData=db.map((el)=> (el.id===data.id? data:el));
        setDb(newData);
    }
    const deleteData=(id)=>{
      let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id '${id}'?`);
    

    if(isDelete){
      //es decir que este nuevo arreglo cuando el id sea igual al id lo va a discriminar 
      let newData = db.filter((el)=> el.id !== id);
      setDb(newData);
    }
  }
    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudFroms
            CreateData={CreateData}
            updateData={updateData} 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            <CrudTable
             data={db}
             setDataToEdit={setDataToEdit}
             deleteData={deleteData}/>
          
        </div>
    )
}

export default CrudApp
