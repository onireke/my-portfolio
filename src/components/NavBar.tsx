import React from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <main className="nav-main">
      <Link href="/">
        <p>Amosa Abdulfatah Olayinka</p>
      </Link>

      <div className="left-bar">
        <ul className="bar-pages">
          <Link href="#About">
            <a>About</a>
          </Link>

          <Link href="#Work">
            <a>Work</a>
          </Link>

          <Link href="#Contact">
            <a>Contact</a>
          </Link>
        </ul>
        <div className="mode-div">
          <Image
            src="/images/modecontrol.png"
            alt="modecontrol"
            width={12}
            height={12}
          />
        </div>
      </div>
    </main>
  );
}

export default NavBar;
