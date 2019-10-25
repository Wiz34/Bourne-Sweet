import React from 'react';
import './Nav.css'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../assets /bsweet.png'

const Navigation = () => {
  return (
    <>
      <Navbar bg="white" expand="sm" >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className='bsweet_logo'
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="collapse navbar-collapse justify-content-end">
          <Nav >
            <Nav.Link href="/about">OUR STORY</Nav.Link>
            <NavDropdown title="SWEETS" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/desserts">DESSERTS</NavDropdown.Item> */}
              <NavDropdown.Item href="/pies">PIES</NavDropdown.Item>
              <NavDropdown.Item href="/cakes">CAKES</NavDropdown.Item>
              <NavDropdown.Item href="/bakedGoods">BAKED GOODS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >

    </>

  );
}



export default Navigation;