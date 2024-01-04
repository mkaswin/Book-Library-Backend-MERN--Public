
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function Customerupdate() {
 const nav=useNavigate()
  const {id}=useParams()

   const [customupdated, setcustomupdated] = useState([])

   useEffect(()=>{
    const cusview=`http://localhost:4000/cstmrview/${id}`
    axios.get(cusview).then(res=>{
      setcustomupdated(res.data)
      console.log(res.data);

    }).catch((err)=>console.log(err))

   },[])


   useEffect(()=>{
    const csupdate=`http://localhost:4000/customerupdate/${id}`
    axios.get(csupdate).then(res=>{
      setcustomupdated(res.data)
      console.log(res.data);
    }).catch((err)=>console.log(err))
   },[])


   const [Firstname, setFirstname] = useState(customupdated.Firstname)
   const [Mail, setMail] = useState(customupdated.Mail)
   const [City, setCity] = useState(customupdated.City)
     const [Pincode, setPincode] = useState(customupdated.Pincode)
     const [Landmark, setLandmark] = useState(customupdated.Landmark)
     const [State, setState] = useState(customupdated.State)

  const update=async(e)=>{
    Swal.fire({
      title: "Do you want to save the updates?",
      showDenyButton: true,
      
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then(async(result) => {
     
      if (result.isConfirmed) {
        e.preventDefault()
        const Customerupdate=await axios.put(`http://localhost:4000/customerupdate/${id}`,{Firstname,State,City,Landmark,Mail,Pincode})
      
        if (Customerupdate) {
          
          
          nav('/customtable')
        }

        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        nav('/customtable')
      }
    });



   
  }



  

  return (

    <div>

<Card className='cust__card'>
         <Card.Header><b>UPDATE CUSTOMER</b></Card.Header>
     
      <Card.Body>
        
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
               NAME OF CUSTOMER
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={customupdated.Firstname} placeholder="Enter the name of customer" onChange={(e)=>setFirstname(e.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          MAIL 
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={customupdated.Mail}  placeholder="email@example.com" onChange={(e)=>setMail(e.target.value)} />
          <Form.Text className="explanation">
      
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          CITY
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={customupdated.City} type="text"   placeholder="" onChange={(e)=>setCity(e.target.value)}  />

          <Form.Text className="explanation">
        
      </Form.Text>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          LANDMARK
        </Form.Label>
        <Col sm="10">
          <Form.Control Value={customupdated.Landmark} type="text" placeholder="" onChange={(e)=>setLandmark(e.target.value)}  />

          
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          STATE
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" Value={customupdated.State}   placeholder="" onChange={(e)=>setState(e.target.value)}  />

          
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
          PINCODE
        </Form.Label>
        <Col sm="10">
          <Form.Control type="" Value={customupdated.Pincode}  placeholder="" onChange={(e)=>setPincode(e.target.value)}  />

          
        </Col>
      </Form.Group>
      
    </Form>
    <Button  onClick={(update)}   className='reg__button' variant="secondary" >REGISTER</Button>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Customerupdate