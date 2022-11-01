import React from "react";
import Image from "next/image";

function ProjectList() {
  return (
    <main className="project--list">
      <section className="list">
        <Image
          width={480}
          height={352}
          src="/images/globalfinbus.jpeg"
          alt="globalfinbus"
          className="finbus"
        />
        <p>Global Finbus</p>
        <p>
          {" "}
          Global Finbus Consuting provide their clients with value added
          accounting and outsourcing services. We offer wide range of services
          individually tailored to meet the needs of our clients.{" "}
        </p>
        <div className="techs">
          <button className="tech">NextJs</button>
          <button className="tech">typescript</button>
          <button className="tech">TailWindCSS</button>
          <button className="tech">Sass</button>
        </div>
      </section>

      <section className="list">
        <a href="https://my-sweet-cock-tail-app.netlify.app/">
          <Image
            width={480}
            height={352}
            src="/images/coctailimg.webp"
            alt="globalfinbus"
            className="finbus"
          />
        </a>

        <p>The Coctail</p>
        <p>
          The word cocktail may be a distant derivation of the name for the
          Aztec goddess, Xochitl, SHO-cheetl, meaning flower in Nahuatl. Xochitl
          was also the name of a Mexican princess who served drinks to American
          soldiers.{" "}
        </p>
        <div className="techs">
          <button className="tech">ReactJs</button>
          <button className="tech">Javascript</button>
          <button className="tech">Sass</button>
          {/* <button className="tech">Sass</button> */}
        </div>
      </section>

      <section className="list">
        <Image
          width={480}
          height={352}
          src="/images/globalfinbus.jpeg"
          alt="globalfinbus"
          className="finbus"
        />
        <p>Global Finbus</p>
        <p>
          {" "}
          Global Finbus Consuting provide their clients with value added
          accounting and outsourcing services. We offer wide range of services
          individually tailored to meet our clients’ needs.{" "}
        </p>
        <div className="techs">
          <button className="tech">NextJs</button>
          <button className="tech">typescript</button>
          <button className="tech">TailWindCSS</button>
          <button className="tech">Sass</button>
        </div>
      </section>
    </main>
  );
}

export default ProjectList;
