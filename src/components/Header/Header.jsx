import { Close, MenuOpenOutlined } from "@material-ui/icons";
import React, { useState } from "react";

import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <h1>Vitor</h1>
      </div>

      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href=" https://wa.me/5521965117167">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuOpenOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
