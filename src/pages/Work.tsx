import React from "react";
import ProjectList from "../components/ProjectList";
import Image from "next/image";

function Work() {
  return (
    <main className="work--main" id="Work">
      <section className="work--section">
        <article className="top">
          <div className="top--left">
            <p className="feature--project">Featured Projects</p>
            <div className="stuffword--image">
              <p className="stuff--word">Stuff I’ve Worked On </p>
              <Image
                width={32}
                height={32}
                src="/images/booklike.png"
                alt="booklike"
              />
            </div>
          </div>
        </article>
        <ProjectList />
      </section>
    </main>
  );
}

export default Work;
