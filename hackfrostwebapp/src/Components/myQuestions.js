import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  "react-bootstrap";
import '../questions.css';
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

class myQuestions extends React.Component {
    
    //Dit is de about pagina waar ik een copy van de inleiding uit de documentatie heb gestoken.
    
    render() {
    return(
    //Algemene lay out van de pagina
    <React.Fragment>
      <NavigationBar/>
        <div className="homebackground h-100">
        <div className="history">
            <Form className="search-container">
                <input type="text"  placeholder="Search..." class="search-bar"></input>
                <a href="" id="search-btn"><i className="fa fa-search"></i></a>
            </Form>
            <h4>Date</h4>
            <p>question</p>
            <h4>Date</h4>
            <p>question</p>
            <h4>Date</h4>
            <p>question</p>
        </div>
        <div className="rightpanel">
            <div id="title">
                <h5>Questions</h5>
                <p>[Date]</p>
            </div>
            <p>Extra info</p>
            <p>Extra info</p>
            <p>Extra info</p>
            <div className="question">
                <div className="user">
                    <img src="../images/User_Icon.png" alt="profile picture"/>
                    <p>Name</p>
                </div>
                <p>Subject question</p>
                <p>Extra info</p>
            </div>
            <div className="question">
                <div className="user">
                    <img src="../images/User_Icon.png" alt="profile picture"/>
                    <p>Name</p>
                </div>
                <p>Subject question</p>
                <p>Extra info</p>
            </div>
        </div>
        </div>
        </React.Fragment>
    )
    }
}
//exporteren van de pagina
export default myQuestions;