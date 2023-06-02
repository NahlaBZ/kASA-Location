import React from "react";

const Banner = (props) => {
  return (
    <div className="headerImg">
      <div className={`headImg-back ${props.class}`}>
        <div className="headImg-cont">
          {props.title ? <p>{props.title}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Banner;
