import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function Booktb() {
    const navi =useNavigate()
    
    const [bks, setbks] = useState([])

    useEffect(()=>{
        const bkapi=`http://localhost:4000/booktable`;
        axios.get(bkapi).then(async(res)=>{
            await setbks(res.data)
        })
    })

    const viewbook=async(_id)=>{
        console.log(_id);
        navi(`/bkview/${_id}`)

    }
    const bkdlt=async(_id)=>{
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
                axios.delete(`http://localhost:4000/delbook/${_id}`).then(()=>{
        setbks();
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
    const update=async(_id)=>{
        navi(`/update/${_id}`)
    }
  
    
  return (
    <div>
              <Table className='book__table' >
            <thead>
                <tr>
                    <th>BOOK</th>
                    <th>AUTHOR</th>
                    <th>PUBLICATION</th>
                    <th>YEAR</th>
                    <th>AVAILABILITY</th>
                    
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {bks?.map((bk)=>(
                    <tr>
                    <td>{bk.Bookname}</td>
                    <td>{bk.Authorname}</td>
                    <td>{bk.Published}</td>
                    <td>{bk.Year}</td>
                    <td>{`${bk.Availability}`==="true"
                    ?"yes"
                    :"No"
                    }</td>
                    
                    <td><Button className='table__view' variant="success" onClick={()=>viewbook(bk._id)} >VIEW</Button>{' '}</td>
                    <td><Button className='table__dlt' variant="danger" onClick={()=>bkdlt(bk._id)}>DELETE</Button>{' '}</td>
                    <td><Button className='table__update' variant="secondary" onClick={()=>update(bk._id)} >UPDATE</Button>{' '}</td>
                </tr>
                
           

                ))}
                </tbody>

        </Table>

    </div>
  )
}

export default Booktb