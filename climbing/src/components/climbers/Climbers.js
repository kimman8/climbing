import React, { useState, useEffect } from "react";
import Climber from "./Climber";

const Climbers = () => {
  const [climbers, setClimbers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getClimbers();
    //eslint-disable-next-line
  }, []);
  const getClimbers = async () => {
    setLoading(true);
    const res = await fetch("/climbers");
    const data = await res.json();
    setClimbers(data);
    setLoading(false);
  };
  if (loading) {
    return <h4>loading...</h4>;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Climbers</h4>
      </li>
      {!loading && climbers.length === 0 ? (
        <p>No climbers to show...</p>
      ) : (
        climbers.map((climber) => (
          <Climber key={climber.id} climber={climber} />
        ))
      )}
    </ul>
  );
};

export default Climbers;
