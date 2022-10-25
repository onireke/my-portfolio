import React from "react";

function AboutInfo() {
  return (
    <main className="AboutInfo-main">
      <section className="about-details">
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
            <div className="black-btn">
              <p btn-word1>Let’s work together</p>
              <img
                src="/images/arrow-up.png"
                alt="arrow-up"
                className="arrow-up"
              />
            </div>
            <div className="white-btn">
              <p btn-words>See some of my works</p>
              <img
                src="/images/arrow-down.png"
                alt="arrow-down"
                className="arrow-down"
              />
            </div>
          </div>
        </div>
        <img
          src="/images/mypicture.jpg"
          alt="mypicture"
          className="about-img"
        />
      </section>
    </main>
  );
}

export default AboutInfo;
