import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const Navbar = () => {
  return (
    <Head>
    <Link to = "/">Home</Link>
   
    <Link to= "/login">Login</Link>
    </Head>
  )
}

export default Navbar;

const Head = styled.div`
display: flex; 
justify-content: space-evenly;
align-items: center;
height:50px;
font-size: 30px;
a {
  text-decoration: none;
  color: black;
}
`