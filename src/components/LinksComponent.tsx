import React from "react";
import Image from "next/image";

function LinksComponent() {
  return (
    <main className="links-main">
      <p className="social">Socials</p>
      <section className="links-section">
        <article className="left-links">
          <a href="https://github.com/onireke">
            <div className="link">
              <div className="linkimage-linkname">
                <Image
                  width={16}
                  height={16}
                  src="/images/github.png"
                  alt="github"
                  className="linkimage"
                />
                <p className="link-name">Github</p>
              </div>
              <Image
                width={12}
                height={12}
                src="/images/uparrow.png"
                alt="arrow"
                className="arrow-image"
              />
            </div>
          </a>

          <div className="link">
            <div className="linkimage-linkname">
              <Image
                width={16}
                height={16}
                src="/images/codepen.png"
                alt="codepen"
                className="linkimage"
              />
              <p className="link-name">Codepen</p>
            </div>
            <Image
              width={12}
              height={12}
              src="/images/uparrow.png"
              alt="arrow"
              className="arrow-image"
            />
          </div>
        </article>

        <article className="right-links">
          <a href="https://www.linkedin.com/in/amosa-abdulfatah-olayinka-5a224615b/">
            <div className="link">
              <div className="linkimage-linkname">
                <Image
                  width={16}
                  height={16}
                  src="/images/linkedin.png"
                  alt="linkedin"
                  className="linkimage"
                />
                <p className="link-name">Linkedin</p>
              </div>
              <Image
                width={12}
                height={12}
                src="/images/uparrow.png"
                alt="arrow"
                className="arrow-image"
              />
            </div>
          </a>

          <a href="https://twitter.com/BlessedCoder">
            <div className="link">
              <div className="linkimage-linkname">
                <Image
                  width={16}
                  height={16}
                  src="/images/twitter.png"
                  alt=""
                  className="linkimage"
                />
                <p className="link-name">Twitter</p>
              </div>
              <Image
                width={12}
                height={12}
                src="/images/uparrow.png"
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
