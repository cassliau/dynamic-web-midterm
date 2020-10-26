import React from "react";

function Header() {
  return (
    <header className="Header">
      <div>
        <h1>Home</h1>
      </div>
      <nav>
        <a href="/?category=apple"> Apple</a>
        <a href="/?category=trump"> Trump</a>
      </nav>
    </header>
  );
}

export default Header;
