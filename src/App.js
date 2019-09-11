import React from 'react';
import './App.css';
import ToDo from "./todo/ToDo"
import Form from "./forms/FormContainer"
import { BrowserRouter, Route } from "react-router-dom";

//npm install --save react-router-dom
function App() {
  return (
    <BrowserRouter>        
      <Route exact path="/" component={ToDo} />
      <Route exact path="/forms" component={Form} />
    </BrowserRouter>
  )
}

export default App;
