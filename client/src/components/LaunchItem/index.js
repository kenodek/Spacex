import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const LaunchItem = ({
  launch: {
    flight_number,
    mission_name,
    launch_success,
    launch_year,
    launch_date_local,
    details,
  },
}) => {
  return (
    <div className="launch-item">
      <div className="row-between">
        <h4>
          Mission:{" "}
          <span
            className={`mission-name ${
              launch_success ? "mission-name--success" : "mission-name--failure"
            }`}
          >
            {" "}
            {mission_name}
          </span>
        </h4>
        <Link to={`/launch/${flight_number}`}>Launch Details</Link>
      </div>

      <div className="row-between">
        <span className="date">Date: {launch_date_local.slice(0, 10)}</span>
      </div>

      <div className="row-between">
        <span className="date">Time: {launch_date_local.slice(11, 19)}</span>
      </div>
    </div>
  );
};

export default LaunchItem;