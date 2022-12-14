import React from "react";
import Link from "next/link";
import Image from "next/image";

function MainInfo() {
  return (
    <main className="mainInfo-main">
      <section className="main-details">
        <div className="detail">
          <div className="greetings">
            <div className="greet">
              <h1 className="hi">Hi</h1>
              <Image
                src="/images/hand.png"
                alt="hand"
                className="hand"
                width={32}
                height={32}
              />
            </div>

            <h1 className="name">I am Amosa Abdulfatah Olayinka</h1>
          </div>
          <p className="info">
            I am a dedicated and an active Javascript/React based Frontend{" "}
            <br /> Developer seeking entry level Frontend opportunities
            utilizing React.js/Next.js. <br /> I work personably and
            resourcefully in a team environment and independently <br /> to find
            efficient solutions to complex problems.
          </p>
          <div className="buttons">
            <Link href="#Contact">
              <div className="black-btn">
                <p btn-word1>Let us work together</p>
                <Image
                  src="/images/arrow-up.png"
                  alt="arrow-up"
                  className="arrow-up"
                  width={12}
                  height={12}
                />
              </div>
            </Link>

            <Link href="#Work">
              <div className="white-btn">
                <p btn-words>See some of my works</p>
                <Image
                  src="/images/arrow-down.png"
                  alt="arrow-down"
                  className="arrow-down"
                  width={12}
                  height={12}
                />
              </div>
            </Link>
          </div>
        </div>
        <Image
          src="/images/coding.gif"
          alt="mypicture"
          width={600}
          height={500}
        />
      </section>
    </main>
  );
}

export default MainInfo;
