import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import background from './back.jpg'
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div>
 <Navbar className='nav' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="Brand__name" href="#home"><b>Career.</b>com</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='links' href="#home" >HOME</Nav.Link>
            <Nav.Link className='links' href="#Sign in"><Link  to="/Sign" style={{textDecoration:"none", color:"black"}}>SIGN IN</Link></Nav.Link>
            <Nav.Link className='links' href="#register"><Link to="/register" style={{textDecoration:"none", color:"black"}}>REGISTER</Link></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      <div>
      <img className='front__background'  src={background} alt="Logo"/>
      <h1 className='front__heading'>
        Learn early. Learn often.
      </h1>
      <p className='front__para'>Your reputation is more important than your paycheck, and your integrity is worth more than your career.

</p>
      </div>
      
    </div>
    

  )
}

export default Mainpage