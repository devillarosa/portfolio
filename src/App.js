import React, { Component } from 'react';
import './App.css';

import Info from './components/Info.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Work from './components/Work.js'
import Education from './components/Education.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: props.resume.info,
      about: props.resume.about,
      skills: props.resume.skills,
      projects: props.resume.projects,
      work: props.resume.work,
      education: props.resume.education
    };
  }
    
  render() {
    return (
      <div className="App">
        <div className="container-fluid page-container">
          <div className="col-md-4 contact fixed">
            <nav id="navbar-example2" class="navbar navbar-light bg-light">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#about">@about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills">@skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">@projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#work">@work</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#education">@education</a>
                </li>
              </ul>
            </nav>
            <Info props={this.state.info} />
          </div>
          <div className="col-md-8 details scrollit">
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
              <About props={this.state.about} />
              <Skills props={this.state.skills} />
              <Projects props={this.state.projects} />
              <Work props={this.state.work} />
              <Education props={this.state.education} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
