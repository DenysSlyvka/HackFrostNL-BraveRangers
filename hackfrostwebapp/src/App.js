import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./Components/HomePage";
import Chatbox from "./Components/Chat";
import myQuestions from "./Components/myQuestions"
import Forum from "./Components/Forum"


function App() {
  return (
     <BrowserRouter>
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/Chat" component={Chatbox}/>
        <Route exact path="/Questions" component={myQuestions}/>
        <Route exact path="/Forum" component={Forum}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
