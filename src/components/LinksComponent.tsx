import React from "react";

function LinksComponent() {
  return (
    <main className="links-main">
      <p className="social">Socials</p>
      <section className="links-section">
        <article className="left-links">
          <a href="https://github.com/onireke">
            <div className="link">
              <div className="linkimage-linkname">
                <img
                  src="./images/github.png"
                  alt="github"
                  className="linkimage"
                />
                <p className="link-name">Github</p>
              </div>
              <img
                src="./images/uparrow.png"
                alt="arrow"
                className="arrow-image"
              />
            </div>
          </a>

          <div className="link">
            <div className="linkimage-linkname">
              <img
                src="./images/codepen.png"
                alt="codepen"
                className="linkimage"
              />
              <p className="link-name">Codepen</p>
            </div>
            <img
              src="./images/uparrow.png"
              alt="arrow"
              className="arrow-image"
            />
          </div>
        </article>

        <article className="right-links">
          <a href="https://www.linkedin.com/in/amosa-abdulfatah-olayinka-5a224615b/">
            <div className="link">
              <div className="linkimage-linkname">
                <img
                  src="./images/linkedin.png"
                  alt="linkedin"
                  className="linkimage"
                />
                <p className="link-name">Linkedin</p>
              </div>
              <img
                src="./images/uparrow.png"
                alt="arrow"
                className="arrow-image"
              />
            </div>
          </a>

          <a href="https://twitter.com/BlessedCoder">
            <div className="link">
              <div className="linkimage-linkname">
                <img src="./images/twitter.png" alt="" className="linkimage" />
                <p className="link-name">Twitter</p>
              </div>
              <img
                src="./images/uparrow.png"
                alt="arrow"
                className="arrow-image"
              />
            </div>
          </a>
        </article>
      </section>
    </main>
  );
}

export default LinksComponent;
