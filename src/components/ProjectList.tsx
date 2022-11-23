import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const projects = [
    {
      title: "Global finbus",
      img: "/images/globalfinbus.jpeg",
      desc: "ehtgdiluqwehf;oquowhqywefhwqohfouwbef boebehtgdiluqwehf;oquowhqywefhwqohfouwbefboeb",
      tech: ["nextjs", "Tailwind", "Typscript", "scss"],
    },
    {
      title: "Cocktail",
      img: "/images/coctailimg.webp",
      desc: "ehtgdiluqwehf;oquowhqywefhwqohfouwbefboe behtgdiluqwehf;oquowhqywefhwqohfouwbefboeb",
      tech: ["reactjs", "scss"],
    },
    {
      title: "global finbus",
      img: "/images/coctailimg.webp",
      desc: "ehtgdiluqwehf;oquowhqywefhwqohfouwbef boebehtgdiluqwehf;oquowhqywefhwqohfouwbefboeb",
      tech: ["nextj", "hhh"],
    },
    {
      title: "global finbus",
      img: "/images/coctailimg.webp",
      desc: "ehtgdiluqwehf;oquowhqywefhwqohfouwbef boebehtgdiluqwehf;oquowhqywefhwqohfouwbefboeb",
      tech: ["nextj", "hhh"],
    },
    {
      title: "global finbus",
      img: "/images/coctailimg.webp",
      desc: "ehtgdiluqwehf;oquowhqywefhwqohfouwbef boebehtgdiluqwehf;oquowhqywefhwqohfouwbefboeb",
      tech: ["nextj", "hhh"],
    },
  ];
  return (
    <main className="project--list">
      {projects.map((p) => (
        <ProjectCard title={p.title} img={p.img} desc={p.desc} tech={p.tech} />
      ))}
    </main>
  );
}

export default ProjectList;
