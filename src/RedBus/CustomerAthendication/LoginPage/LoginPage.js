import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import { app } from "../../FireBase_Folder/FireBase";
 

function LoginForm() {
    let Navigate=useNavigate()
    let LoginWithFireBase=getAuth(app)
  const [loginformData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginFormData({ ...loginformData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Form Submitted:", loginformData);
   
    try{
     let LoginSuccess=await signInWithEmailAndPassword(LoginWithFireBase,loginformData.email,loginformData.password)
     alert("login Success")
     Navigate("/Home")   

    }
    catch(err){
          alert("Invalid credentials")
    }
 

  };

  return (
    <div className="login-page">
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginformData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="input-field"
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginformData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="input-field"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
