import React,{useState} from 'react';
import Add from './component/add/add.jsx';
import Edit from './component/edit/edit.jsx';
import Dash from './component/dash.jsx';
import Head from './component/heading.jsx'
import './App.css';
import {Emp} from './component/employee.jsx'

function App(){ 
  const [emply,setemply] = useState(Emp);
  const [add,setadd] = useState(false);
  const [edit,setedit] = useState(false);
  const [employee,setemployee] = useState(null);

  const handleEdit = (id) => {
    const [employee] = emply.filter(employee => employee.id === id);

    setemployee(employee);
    setedit(true);
}

  return ( 
    <>
  { !add && !edit &&( 
    <>
    <Head setadd = {setadd}/>
     <Dash
     emply = {emply}
     handelEdit={handleEdit}
     setemply={setemply}
     handleEdit = {handleEdit}
     />
     </>
  )}

  { add && (
      <Add
      setadd = {setadd}
      emply = {emply}
      setemply = {setemply}
      />
  )}

  { edit && ( 
    <Edit
    setedit = {setedit}
    emply = {emply}
    setemply = {setemply}
    employee = {employee}
    />
    )}
  </>
  )
}

export default App;