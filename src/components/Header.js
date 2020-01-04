import React from "react";

const Header = (props) => {
  return (
    <nav>
    <div className="nav-wrapper">
	<a className="brand-logo center" href="https://natemkelley.github.io">{props.text}</a>
    </div>
  </nav>
  );
};

export default Header;