import React from "react";

function AboutInfo() {
  return (
    <main className="AboutInfo-main">
      <section className="about-details">
        <div className="detail">
          <div className="greetings">
            <h1>Hi</h1>
            <img src="/images/hand.png" alt="hand"></img>
            <br /> I'm Amosa Abdulfatah Olayinka
          </div>
          <p className="info">
            Abdulfatah is a dedicated and an active <br /> Javascript/React
            based Frontend Developer seeking entry <br /> level Frontend
            opportunities utilizing React.js/Next.js. <br /> He works personably
            and resourcefully in a team environment and independently <br /> to
            find efficient solutions to complex problems.
          </p>
          <div className="buttons">
            <button>
              Let’s work together{" "}
              <img src="/images/arrow-up.png" alt="arrow-up" />
            </button>
            <button>
              See some of my works{" "}
              <img src="/images/arrow-down.png" alt="arrow-down" />
            </button>
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
