import React from "react";

function NavBar() {
  return (
    <main className="nav-main">
      <p>Amosa Abdulfatah Olayinka</p>

      <div className="left-bar">
        <ul className="bar-pages">
          <li>About</li>
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
