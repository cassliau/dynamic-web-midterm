import React from "react";

function Header() {
  return (
    <header className="Header">
      <div>
        <div className="navTitle">
          <h2>
            <a href="/?category=top-headlines"> Your Meme News</a>
          </h2>
        </div>
        <div className="navBar">
          <p className="topCategory">Popular Category: </p>
          <nav>
            <div className="horizontalLine">
              <a href="/?category=top-headlines"> Top Headlines</a>
              <a href="/?category=apple"> Apple</a>
              <a href="/?category=biden"> Biden</a>
              <a href="/?category=covid"> Covid</a>
              <a href="/?category=elections"> Election</a>
              <a href="/?category=finance"> Finance</a>
              <a href="/?category=stocks"> Stocks</a>
              <a href="/?category=tech"> Tech</a>
              <a href="/?category=trump"> Trump</a>
            </div>
          </nav>
          <div>
            <form>
              <div className="searchBar">
                <p>search for category</p>
                <input type="text" name="category" />
                <button> Search </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
