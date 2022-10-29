import React from "react";
import Link from "next/link";

function MainInfo() {
  return (
    <main className="mainInfo-main">
      <section className="main-details">
        <div className="detail">
          <div className="greetings">
            <div className="greet">
              <h1 className="hi">Hi</h1>
              <img src="/images/hand.png" alt="hand" className="hand" />
            </div>

            <h1 className="name">I'm Amosa Abdulfatah Olayinka</h1>
          </div>
          <p className="info">
            Abdulfatah is a dedicated and an active <br /> Javascript/React
            based Frontend Developer seeking entry <br /> level Frontend
            opportunities utilizing React.js/Next.js. <br /> He works personably
            and resourcefully in a team environment and independently <br /> to
            find efficient solutions to complex problems.
          </p>
          <div className="buttons">
            <Link href="#Contact">
              <div className="black-btn">
                <p btn-word1>Let’s work together</p>
                <img
                  src="/images/arrow-up.png"
                  alt="arrow-up"
                  className="arrow-up"
                />
              </div>
            </Link>

            <Link href="#Work">
              <div className="white-btn">
                <p btn-words>See some of my works</p>
                <img
                  src="/images/arrow-down.png"
                  alt="arrow-down"
                  className="arrow-down"
                />
              </div>
            </Link>
          </div>
        </div>
        <img src="/images/mypicture.jpg" alt="mypicture" className="main-img" />
      </section>
    </main>
  );
}

export default MainInfo;
