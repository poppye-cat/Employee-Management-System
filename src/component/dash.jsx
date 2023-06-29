import React from 'react';
//import {emply} from './component/emplyloyee.jsx'

function Dash({emply,setemply,handelEdit}){
    const handeldelete = (id) => { 
    const [employ] = emply.filter(employee => employee.id === id);

                setemply(emply.filter(employ => employ.id !== id));
            }
    return(
        <table>
            <thead>
        <tr>
            <th id='1 '>Sr. no.</th>
            <th id= '2'>Name</th>
            <th id= '3'>Last Name</th>
            <th id= '4'>Email</th>
            <th id= '5'>Salary</th>
            <th id ='6'>date</th>
            <th id='7'>Actions</th>
        </tr>
        </thead>
        <tbody>
            {
                emply.length > 0 ? (
                    emply.map((em,i) =>(
                        <tr key = {em.id}>
                            <td>{i+1}</td>
                            <td>{em.firstName}</td>
                            <td>{em.lastName}</td>
                            <td>{em.email}</td>
                            <td>{em.salary}</td>
                            <td>{em.date}</td>
                            <td>
                                <button onClick={() =>{handelEdit(em.id)}}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => {handeldelete(em.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))
                )
                : <h2>NO DATA</h2>
            }
        </tbody>
        </table>
    )
}

export default Dash;