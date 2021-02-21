import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./Components/HomePage";
import Chatbox from "./Components/Chat";


function App() {
  return (
     <BrowserRouter>
      <div>
        <Route exact path="/home" component={Homepage}/>
        <Route exact path="/Chat" component={Chatbox}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
