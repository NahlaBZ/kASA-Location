import React from "react";
import { NavLink } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="page404">
      <h3>404</h3>
      <span>Oups!La page que vous demandez n'existe pas </span>
      <NavLink to="/" className="nav-active homeLink">
        <li>Retourner sur la page d’accueil</li>
      </NavLink>
    </div>
  );
};

export default NotFound404;
