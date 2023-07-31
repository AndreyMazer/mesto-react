import headerLogo from "../images/logo.svg";
import React from "react";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="лого" />
    </header>
  );
}

export default Header;
