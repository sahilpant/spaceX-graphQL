import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success, links },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-5">
          <h4>Mission: <span className={launch_success?'text-success':'text-danger'}>{ mission_name }</span></h4>
          <p>Date:<Moment format="YYYY-MM-DD HH:mm">{ launch_date_local }</Moment></p>
        </div>
        <div className="col-md-4">
            <img src={links.mission_patch_small? links.mission_patch_small: "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"} width="100" alt="mission patch" />
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary" style={{marginTop:"10px"}}>Launch Details</Link>
        </div>
      </div>
    </div>
  );
}