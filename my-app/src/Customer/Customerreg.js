import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function Customerreg() {

  const navigate=useNavigate()
  

    const [Firstname, setFirstname] = useState('')
    const [Mail, setMail] = useState('')
    const [City, setCity] = useState('')
    const [Landmark, setLandmark] = useState('')
    const [State, setState] = useState('')
    const [Pincode, setPincode] = useState('')

    

    const click =async(e)=>{
        e.preventDefault();
        const cstmrregister=await axios.post (`http://localhost:4000/cstmr`,{ Firstname, Mail, City,Landmark,State, Pincode })
        if (cstmrregister) {
          Swal.fire({
        
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
            
            navigate('/customtable')
            
        } 
        else {
          Swal.fire({
            title: "oops",
            text: "FILL  THE FORM COMPLETELY ",
            icon: "error"
          });
            
        }
        console.log(cstmrregister.data);
    }
   

  return (
    <div>


          
<Card className='cust__card'>
         <Card.Header><b>CUSTOMER</b></Card.Header>
     
      <Card.Body>
        
        <Form className='cust__form'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
               NAME 
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="NAME OF CUSTOMER" onChange={(e)=>setFirstname(e.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          MAIL
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="email@example.com" onChange={(e)=>setMail(e.target.value)} />
          <Form.Text className="explanation">
      
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          CITY
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="EG:KOLKATA" onChange={(e)=>setCity(e.target.value)} />

          <Form.Text className="explanation">
        
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          LANDMARK
        </Form.Label>
        <Col sm="10">
          <Form.Control type="TEXT" placeholder="" onChange={(e)=>setLandmark(e.target.value)}  />

          
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          STATE
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="" onChange={(e)=>setState(e.target.value)}  />

          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          PINCODE
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="" onChange={(e)=>setPincode(e.target.value)}  />

          
        </Col>
      </Form.Group>
      
    </Form>
    <Button onClick={(click)}  className='reg__button' variant="none" >REGISTER</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Customerreg