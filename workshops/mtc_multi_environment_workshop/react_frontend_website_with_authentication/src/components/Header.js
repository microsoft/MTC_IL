import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Auth from "../Auth";
import "./Header.css"


const Header = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(Auth.currentUser().emails[0]);
  },[])

  const logout = () => {
    Auth.logout();
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={process.env.PUBLIC_URL+"images/microsoft-5.svg"}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Microsoft MTC IL - Multi Environment Application
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <NavDropdown className="dropdown" title={user} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          {/* <Navbar.Text>
            Welcome  <a href="#login">{user}</a> 
          </Navbar.Text> */}
        </Navbar.Collapse>
    
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
