import React from "react";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="cards-wrapper">
      {projects &&
        projects.map((p, index) => (
          <div key={index} className={`card All ${p.category}`}>
            {" "}
            <img src={p.img} />
          </div>
        ))}
    </div>
  );
};

export default ProjectList;