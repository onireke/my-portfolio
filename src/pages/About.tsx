import React from "react";
import Image from "next/image";

function About() {
  return (
    <main className="about-main" id="About">
      <section className="about-section">
        <div className="about-bit">
          <p className="about-me">ABOUT ME</p>
          <p className="bit">A bit about me.</p>
        </div>
        <div className="info-more">
          <p className="info">
            I am a Frontend Software Engineer with 1 year of experience
            designing, developing, managing user interface and prioritizing user
            experience. An enthusiastic team player that can efficiently
            collaborate as part of a productive team and also able to
            effectively self-manage during independent projects.
          </p>
          <p className="more-info"></p>
        </div>
        <div className="techs-tools">
          <div className="techs">
            <p className="word-tech">Technologies</p>
            <div className="tech-list">
              <div className="namearrow-div">
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">HTML5 & (S)CSS</p>
                </div>
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Javascript(ES6+)</p>
                </div>
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Reactjs</p>
                </div>
                <div className="name-arrow">
                  {" "}
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">TypeScript</p>
                </div>
                <div className="name-arrow">
                  {" "}
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Nextjs</p>
                </div>
                <div className="name-arrow">
                  {" "}
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Redux</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools">
            <p className="word-tool">Tools</p>
            <div className="tool-list">
              <div className="namearrow-div">
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">VsCode</p>
                </div>

                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Git</p>
                </div>

                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Github</p>
                </div>
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Vercel</p>
                </div>
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Netlify</p>
                </div>
                <div className="name-arrow">
                  <Image
                    width={10}
                    height={10}
                    src="/images/arrow.png"
                    alt="arrow"
                    className="arrow"
                  />
                  <p className="tech-name">Tailwindcss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
