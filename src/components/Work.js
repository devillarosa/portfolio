import React from 'react';

const Work = ({props}) => {
    
    const workList = props.map((work) => {
      return(
        <li key={work.startDate}>  
          <h4>{work.position}</h4>
          <h5>{work.company} </h5>
          <h6>{work.startDate} - {work.endDate}</h6>
          <p>{work.summary}</p>
        </li> 
      );         
    });
  
  return (
    <div className="about text-left">
      <h3><i className="fa fa-sm fa-building-o"></i>Work Experience</h3>
      <hr />
        <ul className="list-unstyled">
          {workList}
        </ul>
    </div>
  );
}

export default Work;
