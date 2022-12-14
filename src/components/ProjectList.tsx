import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Global finbus",
      img: "/images/globalfinbus.jpeg",
      desc: "We help you build the management system",
      tech: ["nextjs", "Tailwind", "Typscript", "scss"],
    },
    {
      id: 2,
      title: "Cocktail",
      img: "/images/coctailimg.webp",
      desc: "ehtgdiluqwehf;oquowhqywefhwqohfouwbefboe behtgdiluqwehf;oquowhqywefhwqohfouwbefboeb",
      tech: ["reactjs", "scss"],
    },
  ];
  return (
    <main className="project--list">
      {projects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          img={p.img}
          desc={p.desc}
          tech={p.tech}
        />
      ))}
    </main>
  );
}

export default ProjectList;
