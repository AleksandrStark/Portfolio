import React from "react";
import PropTypes from 'prop-types'


const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="cards-wrapper">
      {projects &&
        projects.map((project) => (
          <div key={Math.random()} className={`card All ${project.category}`}>
            {" "}
            <img src={project.img} alt={project.category}/>
          </div>
        ))}
    </div>
  );

  ProjectList.propTypes = {
    img: PropTypes.string,
    category: PropTypes.string
  }
};



export default ProjectList;