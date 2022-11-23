import React from "react";

const ProjectCard = ({
  title,
  img,
  desc,
  tech,
}: {
  title: string;
  img: string;
  desc: string;
  tech: string[];
}) => {
  return (
    <div className="project-card">
      <img src={img} alt="image" className="img  " />
      <h1 className="title">{title}</h1>
      <p className="description">{desc}</p>
      <p className="tech ">
        {tech.map((t) => (
          <span className="tag">{t}</span>
        ))}
      </p>
    </div>
  );
};

export default ProjectCard;
