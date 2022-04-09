import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Employees = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const navigate = useNavigate()
    React.useEffect(()=>{
        getData();
      },[])
    
      const getData = () =>{
        fetch(`http://localhost:3001/employeeData`)
          .then((res)=>res.json())
          .then((res)=>setEmployeeData(res))
          .catch((err)=>console.log(err))
      }
  return (
   
    
    <div style={{margin:"auto"}}>
    <h1>Employee Details</h1>
        {
        employeeData.map((item,idx)=>{
            return <div key={idx} style={{margin:"auto"}}>
                <table style={{margin:"auto"}}>
                <tbody>
                  <tr style={{border:"1px solid black"}}>
                    <td style={{border:"1px solid black"}}>{item.name}</td>
                    <td style={{border:"1px solid black"}}>{item.role}</td>
                    <td style={{border:"1px solid black"}}>{item.department}</td>
                    <td style={{border:"1px solid black"}}>{item.salary}</td>
                    <td>
                            <Link to={`/employees/${item.id}`}><button>View Details</button></Link>
                    </td>
                  </tr>
                  </tbody>
                </table> 
            </div>
            
        })
      }
      <button onClick={()=>navigate("/NewEmployee")}>add New employee</button>
    </div>
  )};

export default Employees