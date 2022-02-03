import React from "react";

import './App.css';
import {Cars, Comments, Form, Posts, Users} from "./components";

function App() {
  return (
    <div className="App">
        <Form/>
      <Cars/>
        <hr/>
        <Comments/>
        <hr/>
        <Users/>
        <hr/>
        <Posts/>
    </div>
  );
}

export default App;
