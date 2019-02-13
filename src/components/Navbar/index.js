
import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './style.css'


export default function MyNav() {
  return (
    <div className="Mynav">
      <Navbar color="light" light expand='md'>
        <NavbarBrand href="/" ClassName="Logo-nav">Evergarden®</NavbarBrand>
        <Nav className='ml-auto'>
          <NavItem>
            <NavLink href='/'>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/'>Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
    // <div className='dash-nav'>
    //   <nav>
    //     <h1>Logo</h1>
    //     <ul>
    //     <li>Profile</li>
    //     <li>Logout</li>
    //     </ul>
    //   </nav>
    // </div>
  )
}
