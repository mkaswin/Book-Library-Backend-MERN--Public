import React, { useState } from 'react'
import Swal from 'sweetalert2'

import background from './back.jpg'
import {  Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

function Sign() {
  const [mail, setlogamil] = useState('')
  const [password, setlogpassword] = useState()
  const naviagte =useNavigate()
const login=async(e)=>{
  e.preventDefault();
  
  const logdetail =await axios.post("http://localhost:4000/login",{mail,password})
  
  console.log(logdetail.data);
  localStorage.setItem('userinfo',JSON.stringify(logdetail.data))
  


  if(logdetail.data.Token){
   
    Swal.fire({
      title: "Good job!",
      text: "LOGIN SUCCESSFULLY COMPLETED!",
      icon: "success"
    });

    
   
  
    naviagte("/Sidenav")
    
  }
  else{
    
    Swal.fire({
      title: "oops",
      text: "something went wrong ",
      icon: "error"
    });


}}

  return (
    <div>
        <img className='front__background'  src={background} alt="Logo"/>
         <Card className="sign__card">
      <Card.Header className='card__head'><b>LOG IN</b></Card.Header>
      <Card.Body>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="email@example.com" onChange={(e)=>setlogamil(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setlogpassword(e.target.value)} />
          
        </Col>
      </Form.Group>
    </Form>

        <Button className='login__button' variant="primary" onClick={login}>Login</Button>
      </Card.Body>
      
    </Card>
    </div>
  )
}

export default Sign