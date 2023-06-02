import React, { useState } from "react";
import chevronDown from "../assets/icon/chevron-bas.svg";
import chevronUp from "../assets/icon/chevron-haut.svg";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={togleCollapse}>
        <h3>{props.title}</h3>
        {isOpen ? (
          <img src={chevronUp} alt="chevron haut" />
        ) : (
          <img src={chevronDown} alt="chevron bas" />
        )}
      </div>
      {isOpen && <div className="collapse-content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
