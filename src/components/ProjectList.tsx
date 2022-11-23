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
    {
      id: 3,
      title: "Global finbus",
      img: "/images/globalfinbus.jpeg",
      desc: "We help you build the management system",
      tech: ["nextjs", "Tailwind", "Typscript", "scss"],
    },
    {
      id: 4,
      title: "Global finbus",
      img: "/images/globalfinbus.jpeg",
      desc: "We help you build the management system",
      tech: ["nextjs", "Tailwind", "Typscript", "scss"],
    },
    {
      id: 5,
      title: "Global finbus",
      img: "/images/globalfinbus.jpeg",
      desc: "We help you build the management system",
      tech: ["nextjs", "Tailwind", "Typscript", "scss"],
    },
  ];
  return (
    <main className="project--list">
      {projects.map((p, i) => (
        <ProjectCard
          key={i}
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
