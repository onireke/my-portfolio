import React from "react";

function EmailComponent() {
  return (
    <main className="emailcomponent-main">
      <section className="contactinfo-image">
        <div className="left-side">
          <div className="contact-worktogether">
            <p className="contact">Contact</p>
            <p className="work-together">Let work together</p>
          </div>

          <a href="mailto:amosaabdulfatah@gmail.com">
            <div className="email-part">
              <p className="email">amosaabdulfatah@gmail.com</p>
            </div>
          </a>
        </div>
        <img src="/images/mail.png" alt="mail" className="mail" />
      </section>
    </main>
  );
}

export default EmailComponent;
