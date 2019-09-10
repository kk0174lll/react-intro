import React from 'react';
import './App.css';
import ToDo from "./todo/ToDo"
import Forms from "./forms/Forms"
import { BrowserRouter, Route } from "react-router-dom";

//npm install --save react-router-dom
function App() {
  return (
    <BrowserRouter>        
      <Route exact path="/" component={ToDo} />
      <Route exact path="/forms" component={Forms} />
    </BrowserRouter>
  )
}

export default App;
