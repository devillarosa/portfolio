import React from 'react';


const Skills = ({props}) => {
  
  const programmingLanguages = props[0].techstack.map((skill) => {
      
    if (skill.proficiency < 4){
      return (<li key={skill.name}><span className="label label-default">{skill.name}</span></li>)

    }
    else if (skill.proficiency < 7 ){
      return (<li key={skill.name}><span className="label label-warning">{skill.name}</span></li>)
    }
    else{
      return (<li key={skill.name}><span className="label label-success">{skill.name}</span></li>)
    }
            
  });
  
  const webDevelopmentList = props[1].techstack.map((skill) => {
      
    if (skill.proficiency < 4){
      return (<li key={skill.name}><span className="label label-default">{skill.name}</span></li>)

    }
    else if (skill.proficiency < 7 ){
      return (<li key={skill.name}><span className="label label-warning">{skill.name}</span></li>)
    }
    else{
      return (<li key={skill.name}><span className="label label-success">{skill.name}</span></li>)
    }
      
            
  });
  
  const toolsList = props[2].techstack.map((skill) => {
      
    if (skill.proficiency < 4){
      return (<li key={skill.name}><span className="label label-default">{skill.name}</span></li>)

    }
    else if (skill.proficiency < 7 ){
      return (<li key={skill.name}><span className="label label-warning">{skill.name}</span></li>)
    }
    else{
      return (<li key={skill.name}><span className="label label-success">{skill.name}</span></li>)
    }
            
  });
    
  return (
    <div className="skills text-left">
      <h3><i id="skills" className="fa fa-sm fa-stack-overflow"></i>Skills</h3>
      
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
