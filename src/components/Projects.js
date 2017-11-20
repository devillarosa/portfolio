import React from 'react';

const Projects = ({props}) => {
  
    const projectList = props.map((project) => {
      return(
        <li key={project.name}>  
          <h4><a href={project.url}>{project.name}</a></h4>
          <p>{project.description}</p>
        </li> 
      );         
    });
  
    return (
      <div className="projects text-left">
        <h3><i className="fa fa-sm fa-cog"></i>Projects</h3>
        <hr />
          <ul className="list-unstyled">
            {projectList}
          </ul>
      </div>
  );



}

export default Projects;
