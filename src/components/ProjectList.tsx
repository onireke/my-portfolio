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
      img: "/images/cocktail.png",
      desc: "our cocktail is usually an iced drink of wine mixed with flavoring ingredients",
      tech: ["reactjs", "scss"],
    },
    {
      id: 3,
      title: "Product Store",
      img: "/images/productimage.png",
      desc: "our cocktail is usually an iced drink of wine mixed with flavoring ingredients",
      tech: ["reactjs", "scss", "typescript"],
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
