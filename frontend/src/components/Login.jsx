// import React from 'react'
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const { handelToken } = useContext(AuthContext);

  const handelChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const getToken = () => {
    try {
      fetch("http://localhost:2244/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "content-type": "application/json"},
      })
        .then((res) => res.json())
        .then(({ token }) => {
          handelToken(token);
          // console.log(token)
          navigate(-1);
        });
    } catch (e) {
      //
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input
          onChange={handelChange}
          name="username"
          type="text"
          placeholder="Enter Your Username"
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          onChange={handelChange}
          name="password"
          type="password"
          placeholder="Enter Password"
        ></input>
        <br />
        <button onClick={getToken}>Sign In</button>
      </div>
    </Form>
  )
}

export default Login;

const Form = styled.form`
  width: 300px;
  heigth: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5% auto;
   label {
    margin: 2%;
    font-size: 20px;
   }
  input {
    margin: 2%;
    font-size: 16px;
    border-radius : 5px;
    border : 1px solid;
  }
  button {
    margin-left: 25%;
    border-radius: 4px;
    background-color : transparent;
    border: 1px solid;
    font-size: 15px;
    box-shadow: 2px 0 4px black;
  }
`;