import React, { useState } from "react";

const Character = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} width="500" height="650" padding="10px" />
        </div>
        <div className="card-back">
          <h1>
            <strong>Name: </strong>
            {item.name}
          </h1>
          <ul>
            <li>
              <strong>Birthday: </strong>
              {item.birthday}
            </li>
            <li>
              <strong>Occupation: </strong>
              {item.occupation}
            </li>
            <li>
              <strong>Status: </strong>
              {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
