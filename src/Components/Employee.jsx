import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components"
const Container = styled.div`
  margin: auto;
  padding: 60px;
  width: 400px;
  text-align: center;
`;
const Employee = () => {
     const navigate = useNavigate()
    const { id } = useParams();
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/employeeData/${id}`)
          .then((response) => response.json())
          .then((res) => setEmployee(res))
          .catch((err) => console.log(err));
      }, []);
  return (
    <div>
<Container>
        <>
          <h1>
            Employee Name : {employee.name}
          </h1>
          <h2>Employee Role : {employee.role}</h2>
          <h2> Employee salary: {employee.salary}</h2>
          <h2>Employee Department : {employee.department}</h2>
        </>
   
   <button onClick={()=>navigate("/employees")}>Go Back</button>
    </Container>
    </div>
  )
}

export default Employee