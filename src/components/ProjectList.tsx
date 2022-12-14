import React from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Global finbus",
      img: "/images/globalfinbus.png",
      desc: "We help you build the management system",
      tech: ["nextjs", "Tailwind", "Typscript", "scss"],
      link: "",
    },
    {
      id: 2,
      title: "Cocktail",
      img: "/images/cocktail.png",
      desc: "our cocktail is usually an iced drink of wine mixed with flavoring ingredients",
      tech: ["reactjs", "scss"],
      link: "https://my-sweet-cock-tail-app.netlify.app/",
    },
    {
      id: 3,
      title: "Product Store",
      img: "/images/productimage.png",
      desc: "our cocktail is usually an iced drink of wine mixed with flavoring ingredients",
      tech: ["reactjs", "scss", "typescript"],
      link: "",
    },
  ];
  return (
    <main className="project--list">
      {projects.map((p) => (
        <Link key={p.title} href={p.link}>
          <a target="_blank" rel="noreferrer">
            <ProjectCard
              title={p.title}
              img={p.img}
              desc={p.desc}
              tech={p.tech}
            />
          </a>
        </Link>
      ))}
    </main>
  );
}

export default ProjectList;
