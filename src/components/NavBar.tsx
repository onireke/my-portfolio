import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <main className="nav-main">
      <Link href="/">
        <p>Amosa Abdulfatah Olayinka</p>
      </Link>

      <div className="left-bar">
        <ul className="bar-pages">
          <Link href="/About">
            <li>About</li>
          </Link>

          <li>Work</li>
          <li>Contact</li>
        </ul>
        <div className="mode-div">
          <img src="/images/modecontrol.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default NavBar;
