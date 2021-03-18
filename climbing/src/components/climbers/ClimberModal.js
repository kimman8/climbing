import React from "react";

const ClimberModal = ({ climber }) => {
  return (
    //<!-- Modal Structure -->
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>cunt {climber.name}</h4>
        <p>{climber.highestGrade}</p>
        <img src={climber.img} alt="" />
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  );
};

export default ClimberModal;
