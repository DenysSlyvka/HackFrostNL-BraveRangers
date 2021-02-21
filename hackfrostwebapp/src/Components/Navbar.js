import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';
import Container from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";



class NavigationBar extends Component {

render() {
  return (
   
    <Navbar expand="lg" variant="white" bg="dark">
      <Container>
          <Navbar.Brand href="./">Home</Navbar.Brand>
          <Navbar.Brand href="./Chat">Chat</Navbar.Brand>
          <Navbar.Brand href="#">Form</Navbar.Brand>
      </Container>
    </Navbar>
    
    );
  }
}

export default NavigationBar;