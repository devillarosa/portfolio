import React from 'react';

const Education = ({props}) => {
  
  const education = props.map((edu) => {
    return(
      <li key={edu.institution}>
       <h4>{edu.institution}</h4>
       <h5>{edu.studyType} in {edu.area}</h5>
       <p>GPA: {edu.gpa} &mdash; {edu.highlights}</p>
      </li>
    );
            
  });
  
    
  
  return (
    <div className="education text-left">
      <h3><i id="education" className="fa fa-sm fa-graduation-cap"></i>Education</h3>
      <ul className="list-unstyled">
        {education}
      </ul>
    </div>
  );
}

export default Education;
