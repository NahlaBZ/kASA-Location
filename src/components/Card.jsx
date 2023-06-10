import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ home }) => {
  console.log(home);
  return (
    <NavLink
      key={home.id}
      to={{
        pathname: `/location/${home.id}`,
        state: {
          home: home,
        },
      }}
      className="Cards Cards-link"
    >
      <div className="Cards">
        <img src={home.cover} alt={home.title} />
        <h2>{home.title}</h2>
        <div className="Wrap"></div>
      </div>
    </NavLink>
  );
};

export default Card;
