import React from "react";
import { Link } from "react-router-dom";

import { navStyle } from "./styles.jsx";

import logo from "./logoreact/logoreact.svg";

import Clock from "./digitalclock/clock.js";

const Navigation = () => {
  return (
    <nav style={navStyle.nav}>
      <logo className="logoreact">
        <img src={logo} className="logo" alt="logo" />
        <h6>Power by React</h6>
      </logo>

      <Link to="/">
        <button style={navStyle.navLink}>Главная</button>
      </Link>
      <Link to="/aperture">
        <button style={navStyle.navLink}>Диафрагма</button>
      </Link>
      <Link to="/shutterspeed">
        <button style={navStyle.navLink}>Выдержка</button>
      </Link>
      <Link to="/iso">
        <button style={navStyle.navLink}>ISO</button>
      </Link>
      <Link to="/About">
        <button style={navStyle.navLink}>Инфо</button>
      </Link>

      <logo className="logoclock">
        <div className="clock">
          <Clock />
        </div>
        <h6>Powered by React state</h6>
      </logo>
    </nav>
  );
};

export default Navigation;
