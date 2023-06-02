import React from "react";
import { NavLink } from "react-router-dom";
import Kasalogo from "../assets/icon/Kasalogo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={Kasalogo} alt="logo de Kasa" />
      </div>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : null)}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
