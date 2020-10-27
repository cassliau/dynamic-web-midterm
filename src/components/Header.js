import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="/?category=top-headlines"> Top Headlines</a>
        <a href="/?category=stocks"> Stocks</a>
        <a href="/?category=bitcoins"> Bitcoin</a>
        <a href="/?category=elections"> Election</a>
        <a href="/?category=apple"> Apple</a>
        <a href="/?category=trump"> Trump</a>
        <form>
          <label>
            <input type="text" name="category" />
            <button> Search </button>
          </label>
        </form>
      </nav>
    </header>
  );
}

export default Header;
