import React, { useState } from "react";
const NewEmployee = () => {
   
    const [formData, setFormData] = useState({
        name: "",
        department: "",
        role: "",
        salary: ""
      });

      const handleChange = (e) => {
        const { id, value ,type, checked} = e.target;
    
        setFormData({
            ...formData,
            [id] : type  === "checkbox" ? checked : value
        })
      };
 


  
  const { name, department,salary, role } = formData;

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const payload ={
      name,
      department,
      role,
      salary,
    }

    const jsonpayload = JSON.stringify(payload)
    fetch('http://localhost:3001/employeeData', {
      method: 'POST',
      body: jsonpayload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res)=>console.log(res)).then((err)=>console.log(err))
  };


return (
    <div>
      <h1>Employee Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          onChange={handleChange}
          value={name}
        />
        <br />
        <br />
        <input
          placeholder="role"
          id="role"
          type="text"
          onChange={handleChange}
          value={role}
        />
        <br />
        <br />
        <input
          placeholder="salary"
          id="salary"
          type="number"
          onChange={handleChange}
          value={salary}
        />
        <br />
        <br />
        
        <label>
          Department:
          <select onChange={handleChange} id="department" value={department}>
            <option value="">select</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>
        </label><br/><br/>
        <input type="submit" value="SUBMIT" />
        <br />
        <br />

        
      </form>
            
     
    </div>
  );
};


export { NewEmployee };
