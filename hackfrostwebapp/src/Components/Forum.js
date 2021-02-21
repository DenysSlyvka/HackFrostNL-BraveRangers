import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  "react-bootstrap";
import '../forum.css';
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavigationBar from "./Navbar";
import PlusImage from "../images/Plus_Icon.png";
import QuestionMark from "../images/Question_Mark_icon.png";
import UserIcon from "../images/User_Icon.png";
import MousePrize from "../images/mousePrize.png";
import ScreenPrize from "../images/screenPrize.png";
import VrPrize from "../images/valveIndexPrize.png";

class Forum extends React.Component {
    
    //Dit is de about pagina waar ik een copy van de inleiding uit de documentatie heb gestoken.
    
    render() {
    return(
    //Algemene lay out van de pagina
    <React.Fragment>
      <NavigationBar/>
      <div className="leftPanel">
            <Form classNameName="search-container">
                <input type="text"  placeholder="Search..." className="search-bar text-white"></input>
                <a href="" id="search-btn"><i classNameName="fa fa-search"></i></a>
            </Form>
            <h5>Subject</h5>
            <p>sub-subject</p>
            <p>sub-subject</p>
            <p>sub-subject</p>
            <h5>Subject</h5>
            <p>sub-subject</p>
            <p>sub-subject</p>
            <h5>Subject</h5>
            <p>sub-subject</p>
            <p>sub-subject</p>
            <p>sub-subject</p>
            <h5>Overige...</h5>
        </div>
        <div className="rightPanel">
            <h4>ONDERWERP - subonderwerp</h4>
            <div id="filter">
                <p>[getal] questions</p>
                <a className="filter-btn" href="">filter</a>
            </div>
            <div className="question">
                <div id="user">
                    <p>Name</p>
                    <img src="./photos/profile picture.jpg" alt="profile picture"/>
                </div>
                <div className="info-question">
                    <h3>Subject question</h3>
                    <p>Extra info</p>
                    <p>Extra info</p>
                    <p>Extra info</p>
                </div>
                <div className="react">
                    <p>[Datetime]</p>
                    <p><i className="fas fa-eye"></i>times seen</p>
                    <p><i className="fas fa-user-edit"></i>reactions</p>
                </div>
            </div>
            <div className="question">
                <div id="user">
                    <p>Name</p>
                    <img src="./photos/profile picture.jpg" alt="profile picture"/>
                </div>
                <div className="info-question">
                    <h3>Subject question</h3>
                    <p>Extra info</p>
                    <p>Extra info</p>
                    <p>Extra info</p>
                </div>
                <div className="react">
                    <p>[Datetime]</p>
                    <p><i className="fas fa-eye"></i>times seen</p>
                    <p><i className="fas fa-user-edit"></i>reactions</p>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
    }
}
//exporteren van de pagina
export default Forum;