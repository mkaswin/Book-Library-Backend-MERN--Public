import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


function Customerview() {
  const nav=useNavigate()
  const {id}=useParams()
  const [csview, setcsview] = useState([])


  useEffect(() => {
    const ap=`http://localhost:4000/cstmrview/${id}`
    axios.get(ap).then(async(res)=>{
      await setcsview(res.data)
      console.log(res.data);

    }).catch((err)=>console.log(err))
  
   
  }, [])
const click=async()=>{
  nav(`/Sidenav`)

}

  
  return (
    <div>

       <Card className='view__card'>
             
             <Card.Body className='view__body'>


              <div>
                <p>NAME</p>
                <p>EMAIL</p>
                <p>LANDMARK</p>
                <p>STATE</p>
                <p>CITY</p>
                <p>PINCODE</p>

              </div>
              <div>
                <p><b>{csview.Firstname}</b></p>
                <p><b>{csview.Mail}</b></p>
                <p><b>{csview.Landmark}</b></p>
                <p><b>{csview.State}</b></p>
                <p><b>{csview.City}</b></p>
                <p><b>{csview.Pincode}</b></p>
                
              </div>
              </Card.Body>
              <CardFooter>
              <Button className='return__button' variant="secondary" onClick={(click)} >RETURN </Button>
              </CardFooter>
              </Card>
    </div>
  )
}

export default Customerview