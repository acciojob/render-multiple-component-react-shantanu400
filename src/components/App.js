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
        
        <Comp1 name={React} desc={Learning and solving} />
        <Comp2 name={Redux} desc={Learning and solving}/>
        <Comp3 name={Node} desc={Learning and solving}/>
        <Comp4 name={Express} desc={Learning and solving}/>

        
        <h1 data-ns-test="project-name">Node</h1>
        <h6 data-ns-test="project-description">Learning and solving</h6>
        
        <h1 data-ns-test="project-name">Express</h1>
        <h6 data-ns-test="project-description">Learning and solving</h6>
      
      </div>

    </div>
  )
}


export default App;
