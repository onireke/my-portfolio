import React from "react";
import EmailComponent from "../components/EmailComponent";
import LinksComponent from "../components/LinksComponent";

function Contact() {
  return (
    <main className="contact-main" id="Contact">
      <EmailComponent />
      <section className="links-section">
        <LinksComponent />
      </section>
    </main>
  );
}

export default Contact;
