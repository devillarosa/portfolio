import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Info from './components/Info.js'
import About from './components/About.js'
import Skills from './components/Skills.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: props.resume.info,
      about: props.resume.about,
      skills: props.resume.skills
    };
  }
    
  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="col-sm-4">
              <Info props={this.state.info} />
            </div>
            <div className="col-sm-8">
              <About props={this.state.about} />
              <Skills props={this.state.skills} />
              PROJECTS
              WORK EXPERIENCE
              EDUCATION
            </div>
        </div>
      </div>
    );
  }
}

export default App;
