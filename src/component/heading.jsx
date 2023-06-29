import React from "react";
function Head({setadd}){
    return(
        <>
    <div>
        <center><h2>Employee Management System</h2></center>
    </div>
    <button onClick={() => setadd(true)}>
        Add Emp.
    </button>
    </>
    )
}

export default Head;