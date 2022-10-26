import React from "react";

function About() {
  return (
    <main className="about-main">
      <section className="about-section">
        <div className="about-bit">
          <p className="about">about me</p>
          <p className="bit">A bit about me.</p>
        </div>
        <div className="info-more">
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet
            nunc eget consectetur diam felis justo. Tempor ornare nunc facilisi
            amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet
            sagittis non. Pharetra purus quam mauris malesuada etiam nullam.
            Ultrices nec in massa consequat erat iaculis leo.{" "}
          </p>
          <p className="more-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic!
          </p>
        </div>
        <div className="techs-tools">
          <div className="techs">
            <p className="word-tech">Technologies</p>
            <div className="tech-list">
              <div className="name-arrow">
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">HTML5 & (S)CSS</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Javascript(ES6+)</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Reactjs</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">TypeScript</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Nextjs</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Redux</p>
              </div>
            </div>
          </div>
          <div className="tools">
            <p className="word-tech">Tools</p>
            <div className="tech-list">
              <div className="name-arrow">
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">VsCode</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Git</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Github</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Vercel</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Netlify</p>
                <img src="./images/arrow.png" alt="arrow" className="arrow" />
                <p className="tech-name">Tailwindcss</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
