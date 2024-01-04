import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Reg() {
      const navi=useNavigate()

      

    const [Bookname, setBookname] = useState([])
    const [Authorname, setAuthorname] = useState([])
    const [Published, setPublished] = useState([])
    const [Year, setYear] = useState([])
    const [Availability, setAvailability] = useState([])

    const click =async(e)=>{
        e.preventDefault()
   
    const bookregister=await axios.post(`http://localhost:4000/bookform`,{Bookname,Authorname,Published,Availability,Year})

    if (bookregister){
      Swal.fire({
        
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

        navi('/tablebook')

    }
    
    else{
      Swal.fire({
        title: "oops",
        text: "FILL  THE FORM COMPLETELY ",
        icon: "error"
      });
    }

    }
   



  return (
    <div>
        <Card className='reg__card'>
         <Card.Header><b>BOOK REGISTER</b></Card.Header>
     
      <Card.Body>
        
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
            BOOK NAME
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder=" NAME OF BOOK " onChange={(e)=>setBookname(e.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          AUTHOR
        </Form.Label>
        <Col sm="10">
          <Form.Control placeholder="NAME OF AUTHOR"  onChange={(e)=>setAuthorname(e.target.value)}  />
          <Form.Text className="explanation">
      
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          PUBLICATION
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="PUBLISHER NAME" onChange={(e)=>setPublished(e.target.value)} />

          <Form.Text className="explanation">
        
      </Form.Text>
        </Col>
      </Form.Group>
     

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          YEAR
        </Form.Label>
        <Col sm="10">
          <Form.Control type="date" placeholder="" onChange={(e)=>setYear(e.target.value)}  />

          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicname">
        <Form.Label column sm="10">
          AVAILABILTY
          <Form.Select onChange={(e)=>setAvailability(e.target.value)} >
          
               <option value={true}>YES</option>
               <option value={false}>NO</option>
          </Form.Select>
        </Form.Label>
       
      </Form.Group>

      
    </Form>
    <Button className='reg__button' variant='none'  onClick={(click)}  >REGISTER</Button>
       
      </Card.Body>
    </Card>


    </div>
  )
}

export default Reg