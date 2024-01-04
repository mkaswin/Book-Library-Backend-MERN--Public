import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Customeratable() {
    const navigate =useNavigate()
    const [customer, setcustomer] = useState([])


    useEffect(() => {
      const csapi=`http://localhost:4000/tablecustomer`;
      axios.get(csapi).then(async(res)=>{
        await setcustomer(res.data)

      })
    
     
    }, [])
    const csview=async(_id)=>{
        console.log((_id));
        navigate(`/csview/${_id}`)
    }
    const csdlt=async(_id)=>{
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


      axios.delete(`http://localhost:4000/csdelete/${_id}`).then(()=>{
        setcustomer();
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
    const csupdate =async(_id)=>{
      navigate(`/cusupdate/${_id}`)
    }
    
  return (
    <div>

        <Table className='book__table' >
            <thead>
                <tr>
                    <th>CUSTOMER NAME</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    <th>STATE</th>
                    <th>LANDMARK</th>
                    <th>PINCODE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {customer?.map((cs)=>(
                    <tr>
                    <td>{cs.Firstname}</td>
                    <td>{cs.Mail}</td>
                    <td>{cs.City}</td>
                    <td>{cs.Landmark}</td>
                    <td>{cs.State}</td>
                    <td>{cs.Pincode}</td>
                    <td><Button className='table__view' variant="success" onClick={()=>csview(cs._id)}  >VIEW</Button>{' '}</td>
                    <td><Button className='table__dlt' variant="danger" onClick={()=>csdlt(cs._id)} >DELETE</Button>{' '}</td>
                    <td><Button className='table__update' variant="secondary" onClick={()=>csupdate(cs._id)} >UPDATE</Button>{' '}</td>
                </tr>
                
           

                ))}
                </tbody>

        </Table>
    </div>
  )
}

export default Customeratable