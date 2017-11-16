import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Info from './components/Info.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      info: props.resume.info
    };
  }
    


    
  render() {
    return (
      <div className="App">

        <div className="container">
            <div className="col-sm-4">
                <Info info={this.state.info} />
            </div>
            <div className="col-sm-8">
              ABOUT
              <hr />
              SKILLS
              <hr />
              PROJECTS
              <hr />
              WORK EXPERIENCE
              <hr />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
