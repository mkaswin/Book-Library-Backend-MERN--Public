import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Clientreg() {
  const nav=useNavigate()
    const [Firstname, setfirstname] = useState('')
    const [Username, setusername] = useState('')
    const [Email, setemail] = useState('')
    const [Role, setrole] = useState('')
    const [Phonenumber, setphonenumber] = useState('')
    const [Signedstatus, setsignedstatus] = useState('')

    const click =async(e)=>{
        e.preventDefault();
         const clregister =await axios.post("http://localhost:4000/clintreg",{Firstname,Username,Email,Signedstatus,Phonenumber,Role})
         if (clregister) {
          Swal.fire({
        
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
            nav(`/Clienttab`)
            
         } 
         else {
          Swal.fire({
            title: "oops",
            text: "FILL  THE FORM COMPLETELY ",
            icon: "error"
          });
            
         }
         console.log(clregister.data);
    }


  return (
    <div>
           
           <Card className='cust__card'>
         <Card.Header><b>CLIENT REGISTER</b></Card.Header>
     
      <Card.Body>
        
        <Form className='cust__form'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
            FIRST NAME
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="Enter the name of CLIENT" onChange={(e)=>setfirstname(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          USERNAME
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder=""   onChange={(e)=>setusername(e.target.value)} />
          <Form.Text className="explanation">
      
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          EMAIL
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="" onChange={(e)=>setemail(e.target.value)} />

          <Form.Text className="explanation">
        
      </Form.Text>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          ROLE
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="" onChange={(e)=>setrole(e.target.value)} />

          <Form.Text className="explanation">
        
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          PHONE NUMBER
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="" onChange={(e)=>setphonenumber(e.target.value)}  />

          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicname">
        <Form.Label column sm="10">
          SIGNED STATUS
          <Form.Select  onChange={(e)=>setsignedstatus(e.target.value)}>
          <option> </option>
               <option value={true}>SIGN IN</option>
               <option value={false}>SIGN OUT</option>
          </Form.Select>
        </Form.Label>
       
      </Form.Group>

      
    </Form>
    <Button className='clint__button' variant="none" onClick={(click)} >REGISTER</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Clientreg
