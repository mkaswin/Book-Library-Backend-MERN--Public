import React, { useState } from 'react'
import color from './side.jpg'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Sidenav() {
  const [isExpended, setisExpended] = useState(false);
  
   
  return (
    <div>
      <img className='front__background'  src={color} alt="Logo"/>
      
    <div className={isExpended ?  'side-nav-container':'side-nav-container side-nav-container-NX'}>
      
      <div className='nav-upper'>
        <div className='nav_headding'>
         {isExpended && (<div className='nav-brand'>
            <h3>MAIN MENU</h3>
          </div>)}
          <button className={isExpended ? "side-navbutton side-navbutton-in":"side-navbutton side-navbutton-out"}
          onClick={()=>setisExpended(!isExpended)}>
          <span className=''></span>
          <span className=''></span>
          <span className=''></span>
          </button>
        </div>
           {isExpended &&  (<div className='nav-links'>
        <Nav.Link className='menu-items' href="" ><Link className='side__links' to='/bkreg'>ADD BOOKS</Link></Nav.Link>
        <Nav.Link className='menu-items' href="" ><Link className='side__links' to="/tablebook">BOOK LIBRARY</Link></Nav.Link>
        <Nav.Link className='menu-items' href="" ><Link className='side__links' to="/clientreg">CLIENT REGISTER</Link></Nav.Link>
        <Nav.Link className='menu-items' href="" ><Link className='side__links' to="/clienttab">CLIENTS </Link></Nav.Link>
        <Nav.Link className='menu-items' href="" ><Link className='side__links' to="/customreg">CUSTOMER REGISTER</Link></Nav.Link>
        <Nav.Link className='menu-items' href="" ><Link className='side__links' to="/customtable">CUSTOMER</Link></Nav.Link>
</div>)}


       
      </div>


       
    </div>
    </div>
  )
}

export default Sidenav