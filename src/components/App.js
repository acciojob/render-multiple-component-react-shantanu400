import React, {Component, useState} from "react";
import '../styles/App.css';
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";



const App = () => {
  return (
    <div id="main">
      <div className="ns-wrapper">
        
        <Comp1 name="React" desc="Learning and solving" />
        <Comp2 name="Redux" desc="Learning and solving "/>
        <Comp3 name="Node" desc="Learning and solving "/>
        <Comp4 name="Express" desc="Learning and solving "/>
      
      </div>

    </div>
  )
}


export default App;
