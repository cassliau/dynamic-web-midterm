import React from "react";

function Header() {
  return (
    <header className="Header">
      <div>
        <div className="nav title">
          <h2>Top Categories</h2>
        </div>
        <div>
          <nav>
            <a href="/?category=top-headlines"> Top Headlines</a>
            <a href="/?category=stocks"> Stocks</a>
            <a href="/?category=bitcoins"> Bitcoin</a>
            <a href="/?category=elections"> Election</a>
            <a href="/?category=apple"> Apple</a>
            <a href="/?category=trump"> Trump</a>
            <form>
              <input type="text" name="category" />
              <button> Search </button>
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
