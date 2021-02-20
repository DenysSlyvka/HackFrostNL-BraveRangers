import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
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
            </MDBNavbar>
         </MDBContainer>
        );
    }
}
export default NavigationBar;