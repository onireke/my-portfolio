import React from "react";
import ProjectList from "../components/ProjectList";

function Work() {
  return (
    <main className="work--main" id="Work">
      <section className="work--section">
        <article className="top">
          <div className="top--left">
            <p className="feature--project">Featured Projects</p>
            <div className="stuffword--image">
              <p className="stuff--word">Stuff I’ve Worked On </p>
              <img
                src="/images/booklike.png"
                alt="booklike"
                className="booklike"
              />
            </div>
          </div>
          <div className="top--right">
            <button className="arrow-left">
              <img src="/images/arrow-left.png" alt="arrow" className="arrow" />
            </button>
            <button className="arrow-right">
              <img
                src="/images/arrow-right.png"
                alt="arrow"
                className="arrow"
              />
            </button>
          </div>
        </article>
        <ProjectList />
      </section>
    </main>
  );
}

export default Work;
