import React, { useState, useRef, useEffect } from "react";
import './add.css'

function Add({ setadd, emply, setemply }) {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [salary, setsalary] = useState('');
    const [date, setdate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handeladd = e => {
        e.preventDefault();
        const id = emply.length + 1;
        const employ = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        if(!firstName || !lastName || !email || !salary || !date){
            setadd(false);
        }
         else {
            emply.push(employ);
        setemply(emply);
        setadd(false);
         }
    }
    return (
        <>
            <form onSubmit={handeladd} >

                <label>First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setfirstName(e.target.value)} />

                <label>last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setlastName(e.target.value)} />

                <label>Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={e => setemail(e.target.value)} />

                <label>Salary</label>
                <input
                    id="salary"
                    type="number" 
                    value={salary}
                    name="salary"
                    onChange={(e) => setsalary(e.target.value)} />

                <label>Date</label>
                <input
                    id="date"
                    type="text" value={date}
                    name="date"
                    onChange={(e) => setdate(e.target.value)} />

                <button
                    type="submit"
                >ADD
                </button>
                <button
                    onClick={() => setadd(false)}>
                    Cancel
                </button>

            </form>

        </>
    );
}

export default Add;