import React,{useState}from 'react';
import './edit.css';

function Edit({setedit,emply,setemply,employee}) {
  const [firstName, setfirstName] = useState(employee.firstName);
    const [lastName, setlastName] = useState(employee.lastName);
    const [email, setemail] = useState(employee.email);
    const [salary, setsalary] = useState(employee.salary);
    const [date, setdate] = useState(employee.date);

    const id = employee.id;

    const handelup = e => {
      e.preventDefault();
      const employee = {
        id,
        firstName,
        lastName,
        email,
        salary,
        date
    };
if(!firstName || !lastName || !email || !salary || !date){
      setedit(false);
  }
    else{
      for (let i = 0; i < emply.length; i++) {
        if (emply[i].id === id) {
            emply.splice(i, 1, employee);
            break;
        }
    }
    
    setemply(emply);
    setedit(false);}
    };

  return (
    <>
      <form onSubmit={handelup} >

        <label>First Name</label>
        <input
          id="firstName"
          type="text"
          // ref={textInput}
          value={firstName}
          name="firstName"
          onChange={(e) => setfirstName(e.target.value)} />

        <label>last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)} />
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
          type="number" value={salary}
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
          onClick={() => setedit(false)}>
          Cancel
        </button>

      </form>

    </>
  );
}

export default Edit;