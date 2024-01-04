import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function Clienttable() {
    const nav =useNavigate()
    const [client, setclient] = useState([])
    useEffect(()=>{
        const api="http://localhost:4000/clintab";
        axios.get(api).then(async(res)=>{
            await setclient(res.data)

        })
        
    })
    const clientview=async(_id)=>{
        console.log(_id);
        nav(`/clview/${_id}`)
    }



    const ondelete=async(_id)=>{
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4000/cldelete/${_id}`).then(()=>{
          setclient();
          console.log(_id);
      })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
       
       
    }
    const clupdate =async(_id)=>{
        nav(`/clientupdate/${_id}`)
    }
  return (
    <div>

<Table className='book__table'>
      <thead>
        <tr>
          <th>FIRSTNAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>SIGNEDSTATUS</th>
          <th>PHONENUMBER</th>
          <th className='tab__head'>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {client?.map((cl)=>(
       
            <tr>
            <td>{cl.Firstname}</td>
            <td>{cl.Username}</td>
            <td>{cl.Email}</td>
            <td>{cl.Role}</td>
            
            <td>{`${cl.Signedstatus}`==="true"
            ?"Signed in"
            :"Singned out"}</td>
             <td>{cl.Phonenumber}</td>
        
         

        
        
        
        
            <td><Button className='table__view' variant="success" onClick={()=>clientview(cl._id)}  >VIEW</Button>{' '}</td>
            <td><Button className='table__dlt' variant="danger" onClick={()=>ondelete(cl._id)}>DELETE</Button>{' '}</td>
            <td><Button className='table__update' variant="secondary" onClick={()=>clupdate(cl._id)}>UPDATE</Button>{' '}</td>
            
        </tr>
))}
      </tbody>
    </Table>
    </div>
  )
}

export default Clienttable