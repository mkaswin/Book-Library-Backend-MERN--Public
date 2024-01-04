import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardFooter } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Viewclient() {
  const navi=useNavigate()
    const {id}=useParams()
    const [view, setview] = useState([])
       useEffect(()=>{
        const db=`http://localhost:4000/viewclient/${id}`
        axios.get(db).then(async(res)=>{
            setview(res.data)
            console.log(res.data);
        }).catch((err)=>console.log(err));
       },[])
       const click =async()=>{
        navi('/Sidenav')
       }
  return (
    <div>

<Card className='view__card'>
             
<Card.Body className='view__body'> 
                <div>
                    <p>Firstname</p>
                    <p>Username</p>
                    <p>Email</p>
                    <p>Role</p>
                    <p>Signedstatus</p>
                    <p>Phone number</p>
                </div>
                <div>
                <b>
                   <p>{view.Firstname}</p>
                   <p>{view.Username}</p>
                   <p>{view.Email}</p>
                   <p>{view.Role}</p>
                   <p>{`${view.Signedstatus}`==="true"
                   ? "sign in"
                   : "Sign out"
                   }</p>
                                      <p>{view. Phonenumber}</p>

                   </b>
                </div>
              
  </Card.Body>
  <CardFooter>
              <Button className='return__button' variant="secondary" onClick={(click)} >RETURN </Button>
              </CardFooter>
</Card>

    </div>
  )
}

export default Viewclient