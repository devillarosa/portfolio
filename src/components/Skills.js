import React from 'react';


const Skills = ({props}) => {
  
  const programmingLanguages = props[0].techstack.map((skill) => {
    return (
      <li>
        <label for="skill">
        <meter value={skill.proficiency} min="0" max="10"></meter>
        </label>
          <div class="text-center" id="skill">{skill.name}</div>
      </li>
    )
  });
  
  const webDevelopmentList = props[1].techstack.map((skill) => {
    return (
      <li>
        <label for="skill">
        <meter value={skill.proficiency} min="0" max="10"></meter>
        </label>
          <div class="text-center" id="skill">{skill.name}</div>
      </li>
    )
  });
  
  const toolsList = props[2].techstack.map((skill) => {
    return (
      <li>
        <label for="skill">
        <meter value={skill.proficiency} min="0" max="10"></meter>
        </label>
          <div class="text-center" id="skill">{skill.name}</div>
      </li>
    )
  });
    
  return (
    <div className="about text-left">
      <h3><i className="fa fa-sm fa-stack-overflow"></i>Skills</h3>
      <hr />
      
        <h4><i className="fa fa-sm fa-code"></i>{props[0].Category}</h4>
          <ul className="programmingLanguage list-inline text-left">
            {programmingLanguages}
          </ul>
        <h4><i className="fa fa-sm fa-codepen"></i>{props[1].Category}</h4>
          <ul className="webDevelopment list-inline text-left">
            {webDevelopmentList}
          </ul>
        <h4><i className="fa fa-sm fa-code-fork"></i>{props[2].Category}</h4>
          <ul className="tools list-inline text-left">
            {toolsList}
          </ul>
    </div>
  );
}

export default Skills;
