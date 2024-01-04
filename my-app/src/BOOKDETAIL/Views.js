import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardFooter } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

function Views() {
  const navigate=useNavigate()
  const {id}=useParams()
  const [bks, setbks] = useState([])

  useEffect(()=>{
    const viewapi=`http://localhost:4000/view/${id}`
    axios.get(viewapi).then(async(res)=>{
     await setbks(res.data)
         console.log(res.data);
    }).catch((err)=>console.log(err))
  },)
  const click=async()=>{
    navigate(`/Sidenav`)
  }
  return (
    <div>
          <Card className='view__card'>
             
             <Card.Body className='view__body'>


              <div>
                <p>NAME</p>
                <p>AUTHOR</p>
                <p>PUBLICATION</p>
                <p>YEAR</p>
                <p>AVAILABILITY</p>
                

              </div>
             
              <div>
                <b>
                  <p>{bks.Bookname}</p>
                  <p>{bks.Authorname}</p>
                  <p>{bks.Published}</p>
                  <p>{bks.Year}</p>
                  <p>{`${bks.Availability}`==="true"
                  ?"yes"
                :"No"
                }</p>
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

export default Views