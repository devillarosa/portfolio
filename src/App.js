import React, { Component } from 'react';
import './App.css';

import Info from './components/Info.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Work from './components/Work.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: props.resume.info,
      about: props.resume.about,
      skills: props.resume.skills,
      projects: props.resume.projects,
      work: props.resume.work
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
              <Projects props={this.state.projects} />
              <Work props={this.state.projects} />
              EDUCATION
            </div>
        </div>
      </div>
    );
  }
}

export default App;
