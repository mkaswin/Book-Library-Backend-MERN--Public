import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function Updateclient() {
  const navig=useNavigate()

  const {id}=useParams()
  const [clupdate, setclupdate] = useState([])
    


   useEffect(() => {

    const clapi=`http://localhost:4000/viewclient/${id}`
      axios.get(clapi).then(res=>{
        setclupdate(res.data)
        console.log(res.data);
      }).catch((err)=>console.log(err))
     


   
    
   }, [])

   useEffect(() => {
     const upapi=`http://localhost:4000/clupdate/${id}`
     axios.get (upapi).then(res=>{
      setclupdate(res.data)
      console.log(res.data);
     }).catch((err)=>console.log(err))
   
     
   }, [])


   const [Firstname, setFirstname] = useState(clupdate.Firstname)
   const [Username, setUsername] = useState(clupdate.Username)
   const [Email, setEmail] = useState(clupdate.Email)
   const [Signedstatus, setSignedstatus] = useState(clupdate.Signedstatus)
   const [Role, setRole] = useState(clupdate.Role)
   const [Phonenumber, setPhonenumber] = useState(clupdate.Phonenumber)
   
     const submit =async(e)=>{
      Swal.fire({
        title: "Do you want to save the updates?",
        showDenyButton: true,
       
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
       
        if (result.isConfirmed) {
          e.preventDefault();
    
          const clientupdate = axios.put(`http://localhost:4000/clupdate/${id}`,{Firstname,Username,Email,Signedstatus,Role,Phonenumber})
          if (clientupdate) {
            Swal.fire({
             
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navig('/clienttab')
            
          } 
          
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          navig('/clienttab')
        }
      });
    

    }

  return (
    <div>
      
<Card className='cust__card'>
 <Card.Header ><b>UPDATE</b></Card.Header>

<Form className='cust__form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" Value={clupdate.Firstname} placeholder="Enter Your Name" onChange={(e)=>setFirstname(e.target.value)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
    <Form.Control type="Name" Value={clupdate.Username} onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" >
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" Value={clupdate.Email} placeholder="Enter Your email" onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
        we'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Signedstatus</Form.Label>
        
        <Form.Select placeholder=""  aria-label="Default select example" Value={clupdate.Signedstatus} onChange={(e)=>setSignedstatus(e.target.value)}>
      <option value={true}>Yes</option>
      <option value={false}>No</option>
    
    </Form.Select>
       
        <Form.Text className="text-muted">
            
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Role</Form.Label>
        
        <Form.Control type="email" placeholder="" Value={clupdate.Role} onChange={(e)=>setRole(e.target.value)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phonenumber</Form.Label>
        <Form.Control type="email" placeholder="" Value={clupdate.Phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>


      <Button className='clint__button' variant="success" onClick={(submit)}>update</Button>{' '}
    </Form>
    </Card>


    </div>
  )
}

export default Updateclient