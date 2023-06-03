import React, { useState } from "react";
import chevronDown from "../assets/icon/chevron-bas.svg";
import chevronUp from "../assets/icon/chevron-haut.svg";

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const togleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={togleCollapse}>
        <h3>{props.title}</h3>
        {isCollapsed ? (
          <img src={chevronUp} alt="chevron haut" />
        ) : (
          <img src={chevronDown} alt="chevron bas" />
        )}
      </div>
      {isCollapsed && <div className="collapse-content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
