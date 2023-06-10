import React from "react";
import Card from "./Card";
import data from "../Data/logement.json";

const Cards = () => {


  return (
    <div className="Cards-content">
      {data.map((home) => {
        return <Card home={home} key={home.id} />;
      })}
    </div>
  );
};

export default Cards;
