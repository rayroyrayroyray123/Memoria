import React, { useState } from "react";
import { LoginDiv } from "../../Style/UserCSS.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const onRegister = async event => {
    event.preventDefault();
    
    const response = await fetch('http://localhost:3000/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: Name,
        password:  ConfirmPassword,
        email:  Email
      })
    });

    const responseData = await response.json();
    console.log(responseData);
  }

  return (
    <LoginDiv>
      <form>
        <label>Name</label>
        <input
          type="name"
          value={Name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label>Password (At least 8 characters)</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <label>Confirm password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        />
        <button
            onClick={(e) => {
              onRegister(e);
              navigate("/login");
            }}
          >
            Register!
          </button>
      </form>
    </LoginDiv>
  );
}

export default Register;
