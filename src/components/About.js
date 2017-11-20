import React from 'react';

const About = ({props}) => {
  return (
    <div className="about text-left">
      <h3><i className="fa fa-sm fa-male"></i>About</h3>
      <hr />
      <p>{props}</p>  
    </div>
  );
}

export default About;
