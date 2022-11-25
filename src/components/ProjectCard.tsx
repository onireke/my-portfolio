import React from "react";
import Image from "next/image";

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
      <Image src={img} alt="image" />
      <h1 className="title">{title}</h1>
      <p className="description">{desc}</p>
      <p className="tech ">
        {tech.map((t, i) => (
          <span className="tag" key={i}>
            {t}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ProjectCard;
