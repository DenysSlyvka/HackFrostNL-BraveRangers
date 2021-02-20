import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  "react-bootstrap";
import '../index.css';
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import NavigationBar from "./Navbar";
import PlusImage from "../images/Plus_Icon.png";
import QuestionMark from "../images/Question_Mark_icon.png";
import UserIcon from "../images/User_Icon.png";
import MousePrize from "../images/mousePrize.png";
import ScreenPrize from "../images/screenPrize.png";
import VrPrize from "../images/valveIndexPrize.png";

class About extends React.Component {
    
    //Dit is de about pagina waar ik een copy van de inleiding uit de documentatie heb gestoken.
    
    render() {
    return(
    //Algemene lay out van de pagina
    <React.Fragment>
      <NavigationBar/>
      <div className="homebackground">
          <div className="d-flex justify-content-center ">
              <Card style={{ width: "25%" }}  className="mt-5 mr-5">
                  <Card.Body className="cardColor">
                  <Media className="d-block align-content-center">
                      <Media.Body className="shortPCInfo">
                      <div className="d-flex justify-content-center">
                      <img
                        height= "50%"
                        width= "50%"
                        className="showDetails  mb-3"
                        src={PlusImage}
                        alt="Generic placeholder"
                      />
                      </div>
                      </Media.Body>
                  </Media>
                  <Card.Text>{}</Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: "25%" }}  className="mt-5 mr-5">
                  <Card.Body className="cardColor">
                  <Media className="d-block align-content-center">
                      <Media.Body className="shortPCInfo">
                      <div className="d-flex justify-content-center">
                      <img
                        height= "25%"
                        width= "30%"
                        className="showDetails  mb-3"
                        src={QuestionMark}
                        alt="Generic placeholder"
                      />
                      </div>
                      </Media.Body>
                  </Media>
                  <Card.Text>{}</Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: "25%" }}  className="mt-5">
                  <Card.Body className="cardColor">
                  <Media className="d-block align-content-center">
                      <Media.Body className="shortPCInfo">
                      <div className="d-flex justify-content-center">
                      <img
                        height= "50%"
                        width= "45%"
                        className="showDetails  mb-3"
                        src={UserIcon}
                        alt="Generic placeholder"
                      />
                      </div>
                      </Media.Body>
                  </Media>
                  <Card.Text>{}</Card.Text>
                  </Card.Body>
              </Card>
              </div>
              <div className="d-flex justify-content-center ">
              <Card style={{ width: "75%" }}  className="mt-5">
                  <Card.Body className="cardColor">
                  <Media className="d-block align-content-center">
                      <Media.Body className="shortPCInfo">
                      <div className="d-flex justify-content-around text-light">
                        <h3 className="mr-5 ml-5 ">500 points</h3>
                        <h3 className="mr-5 ml-5">1000 points</h3>
                        <h3 className="mr-5 ml-5">3000 points</h3>
                      </div>
                      <div className="d-flex justify-content-center">
                      <img
                        height= "35%"
                        width= "25%"
                        className="showDetails  mb-3 mr-5"
                        src={MousePrize}
                        alt="Generic placeholder"
                      />
                      <img
                        height= "50%"
                        width= "25%"
                        className="showDetails  mb-3 mr-5"
                        src={ScreenPrize}
                        alt="Generic placeholder"
                      />
                      <img
                        height= "50%"
                        width= "25%"
                        className="showDetails  mb-3 mr-5"
                        src={VrPrize}
                        alt="Generic placeholder"
                      />
                      </div>
                      </Media.Body>
                  </Media>
                  <Card.Text>{}</Card.Text>
                  </Card.Body>
              </Card>
              </div>
          </div>
        </React.Fragment>
    )
    }
}
//exporteren van de pagina
export default About;