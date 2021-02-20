import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  "react-bootstrap";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import NavigationBar from "./Navbar";


class About extends React.Component {
    
    //Dit is de about pagina waar ik een copy van de inleiding uit de documentatie heb gestoken.
    
    render() {
    return(
    //Algemene lay out van de pagina
    <React.Fragment>
      <NavigationBar/>
      <div className="mean-fruit-gradient loginbackground">
          <div className="d-flex justify-content-center ">
              <Card style={{ width: "75%" }}  className="mt-5">
                  <Card.Header>
                  <div className="d-flex justify-content-center">
                      <p>jTo create the project, the REACT framework was chosen, because of previous experience and knowledge in the environment, it seemed the best option to start the project. 
                          Bootstrap & MDB-react were used for the layout and layout of the website. 
                          In addition to the layout, Firebase database was used to develop data storage in a NoSQL database. <br/>
                          During development other ways were also used to create the task, these are also discussed.
                          The process and making went in 3 big steps. The first step was to further explore React and learn how to work in the environment. 
                          The second step was important for the visual layout of the pages. The last step is for the development and connection of the app with the database.</p>
                  </div>
                  </Card.Header>

                  <Card.Body>
                  <Media className="d-block align-content-center">
                      <Media.Body className="shortPCInfo">
                      <div className="d-flex justify-content-center">
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