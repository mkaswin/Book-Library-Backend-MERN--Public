import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import {  useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function Tab() {
  const nav =useNavigate()
  const {id}=useParams()
  const [bkup, setbkup] = useState([])

  useEffect(()=>{
    const ap=`http://localhost:4000/view/${id}`
    axios.get(ap).then(res=>{
      setbkup(res.data)
      console.log(res.data);
    }).catch((err)=>console.log(err))

  })

  useEffect(()=>{
    const upapi=`http://localhost:4000/upd/${id}`
    axios.get(upapi).then(res=>{
      setbkup(res.data)
      console.log(res.data);
    }).catch((err)=>console.log(err))
  })

  const [Bookname, setBookname] = useState(bkup.Bookname)
  const [Authorname, setAuthorname] = useState(bkup.Authorname)
  const [Published, setPublished] = useState(bkup.Published)
  const [Year, setYear] = useState(bkup.Year)
  const [Availability, setAvailability] = useState(bkup.Availability)




  const click =async(e)=>{
    Swal.fire({
      title: "Do you want to save the updates?",
      showDenyButton: true,
      
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
    
      if (result.isConfirmed) {
        e.preventDefault()
        const check= axios.put(`http://localhost:4000/upd/${id}`,{Bookname,Authorname,Published,Year,Availability})
        
        if (check){
        
          Swal.fire({
            
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          nav(`/tablebook`)
          
    
        }
        Swal.fire("Saved!", "", "success");




      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        nav(`/tablebook`)
      }
    });
  
   
    
  }
  

  return (
    <div>
        <Card className='reg__card'>
         <Card.Header><b>UPDATE </b></Card.Header>
     
      <Card.Body>
        
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
            BOOK NAME
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={bkup.Bookname} placeholder="NAME OF BOOK " onChange={(e)=>setBookname(e.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          AUTHOR
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={bkup.Authorname} placeholder="NAME OF AUTHOR" onChange={(e)=>setAuthorname(e.target.value)}  />
          <Form.Text className="explanation">
      
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          PUBLICATION
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={bkup.Published} type="text" placeholder="PUBLISHER NAME" onChange={(e)=>setPublished(e.target.value)} />

          <Form.Text className="explanation">
        
      </Form.Text>
        </Col>
      </Form.Group>
     

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          YEAR
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={bkup.Year} type="date" placeholder="" onChange={(e)=>setYear(e.target.value)}  />

          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formBasicname">
        <Form.Label column sm="10">
          AVAILABILTY
          <Form.Select Value={bkup.Availability } onChange={(e)=>setAvailability(e.target.value)} >
          
               <option value={true}>YES</option>
               <option value={false}>NO</option>
          </Form.Select>
        </Form.Label>
       
      </Form.Group>

      
    </Form>
    <Button className='reg__button' variant="secondary" onClick={(click)} >REGISTER</Button>
       
      </Card.Body>
    </Card>

    </div>
  )
}

export default Tab