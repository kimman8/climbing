import React from "react";
import ClimberModal from "./ClimberModal";

const Climber = ({ climber }) => {
  return (
    <li className="collection-header">
      <a
        className="waves-effect waves-light btn modal-trigger"
        href="#modal1"
        onClick={(e) => console.log(e.target.text)}
      >
        {climber.name}
      </a>
      {}
      <ClimberModal climber={climber} />
    </li>
  );
};

export default Climber;
