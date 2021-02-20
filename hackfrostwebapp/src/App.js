import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./Components/HomePage";

function App() {
  return (
     <BrowserRouter>
      <div>
        <Route exact path="/Home" component={Homepage}/>
      </div>
     </BrowserRouter>
  );
}

export default App;
