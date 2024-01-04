import React, { useState } from 'react'
import axios from 'axios'
import background from './back.jpg'
import { Button, Card, Col, Form, Row,  } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'




function Register() {
  const [name, setname] = useState('')
  const [mail, setmail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
   const naviagte = useNavigate()
   const submit =async(e)=>{
    e.preventDefault();
   
    const value =await axios.post("http://localhost:4000/register",{name,mail,password,confirmpassword})
console.log(value.data);
    localStorage.setItem('userinfo',JSON.stringify(value.data))
    if (value.data.Token){
      Swal.fire({
        title: "Good job!",
        text: "REGISTRED",
        icon: "success"
      });
  
     
      naviagte ("/sidenav")

    }
    else{
      Swal.fire({
        title: "oops",
        text: "something went wrong ",
        icon: "error"
      });
      
    }
    
   }
  

  return (
    <div>
       <img className='front__background'  src={background} alt="Logo"/>
         <Card className='reg__card'>
         <Card.Header><b>REGISTER</b></Card.Header>
     
      <Card.Body>
        
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          NAME
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="ENTER YOUR NAME" onChange={(e)=>setname(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="email@example.com"  onChange={(e)=>setmail(e.target.value)}/>
          <Form.Text className="explanation">
      We'll never share your email with anyone else
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          PASSWORD
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="CREATE PASSWORD"  onChange={(e)=>setpassword(e.target.value)}/>

          <Form.Text className="explanation">
          Password Should Contain Minimum 5 Characters 
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          CONFIRM PASSWORD
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="CONFIRM PASSWORD" onChange={(e)=>setconfirmpassword(e.target.value)} />

          
        </Col>
      </Form.Group>

      
    </Form>
    <Button className='reg__button' variant='none' onClick={(submit)}>REGISTER</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Register