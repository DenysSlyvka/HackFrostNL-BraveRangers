import React from "react";
import '../App.css';
import '../index.css';


import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,

  MDBContainer,

  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";


//Navbar die in sommige schermen wel gebruikt wordt en andere niet
class NavigationBar extends React.Component{
  state = {
    collapseID: ""
  };
  
  //Collapse maken voor als een itemm gecolapsed moet worden
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
  
    //Bevat ook een sign out knop die de gebruiker ui firebase uitlogd. (firebase.auth().signOut())
    render(){        
        return(
          
          <MDBContainer className="fluid">
               <MDBNavbar color='elegant-color-dark' dark expand='md' fixed='top' scrolling>
              <MDBNavbarBrand>
                <strong className="white-text">BYP</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              
                <MDBNavbarNav left>
                  <MDBNavItem active>
                   <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Form">Form</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Privacy">Privacy</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle className="dopdown-toggle" nav>
                        <img src="https://www.hellobeauty.id/storage/images/cache/1cd2f08830fdc4ebf05973eb787d7b0b-250-250.png" className="rounded-circle z-depth-0"
                          style={{ height: "35px", padding: 0 }} alt="" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
         </MDBContainer>
        );
    }
}
export default NavigationBar;