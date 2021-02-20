import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../index.css";

//Footer pagina inladen
//Was even zoeken hoe ik doe aan de onderkant kon laten plakken, het is wel gelukt.
const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 sticky-bottom">
      <MDBContainer  className="text-center text-md-left fluid">
        <MDBRow>
          <MDBCol md="5">
            <h4 className="title  text-md-center">BUILD.</h4>
            <h4 className="title  text-md-center">YOUR.</h4>
            <h4 className="title  text-md-center">PC.</h4>
          </MDBCol>
          <MDBCol className="md-5 text-md-right">
            <h5 className="title text-md-center">Usefull Links</h5>
            <ul className="text-md-center mr-5">
              <li className="list-unstyled">
                <a href="./about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="./Profile">Profile</a>
              </li>
              <li className="list-unstyled">
                <a href="./">Builds</a>
              </li>
              <li className="list-unstyled">
                <a href="./Privacy">Privacy</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="denysslyvka.be"> denysslyvka.be </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;