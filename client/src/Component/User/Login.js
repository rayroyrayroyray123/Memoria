import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../../Style/UserCSS.js";
import Cookies from 'universal-cookie';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  let navigate = useNavigate();

  const onLogin = async event => {
    event.preventDefault();
    
    const response = await fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password:  Password,
        email:  Email
      })
    });

    const responseData = await response.json();
    console.log(responseData);
    console.log(responseData.userId);
    let userId = responseData.userId;
    let token = responseData.token;
 
    const cookies = new Cookies();
    cookies.set('userId', userId);
    cookies.set('token', token);
    window.location.reload();
  }

  return (
    <LoginDiv>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button
          onClick={(e) => {
            onLogin(e);
            navigate("/");
          }}
        >
          Login
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Register
        </button>
      </form>
    </LoginDiv>
  );
}

export default Login;
