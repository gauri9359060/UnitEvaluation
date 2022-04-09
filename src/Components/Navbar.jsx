import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../Contexts/AuthContext'

const NavbarWrapper = styled.nav`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    background-color: teal;
    color:white;
    height:100px;
`

const A = styled(Link)`
text-decoration:none;
color:white;
margin:30px;
font-size:30px;
cursor:pointer;
`
const Navbar = () => {
  return (
    <NavbarWrapper>
        <A to="/">Home</A>
        <A to="/employees">Employees</A>
        <A to="/Login"><button style={{backgroundColor:"green",padding:20,color:"white",cursor:"pointer"}}>Login</button></A>
        <A to="/register"><button style={{backgroundColor:"green",padding:20,color:"white",cursor:"pointer"}}>Register</button></A>
    </NavbarWrapper>
  )
}

export default Navbar