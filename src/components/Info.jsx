import React from "react";
import "./Info.css";
import mail from "../assets/Mail.svg";
import linkedin from "../assets/linkedin.svg";

export default function Info() {
  return (
    <>
      <div className="InfoCont">
        <div className="infoDiv">
          <h1>Vel King</h1>
          <h2>Frontend Developer</h2>
          <h3>vel_block1.blockchain</h3>
        </div>
        <div className="buttons">
          <div>
            <img src={mail} alt="" />
            Email
          </div>

          <div>
            <img src={linkedin} alt="" />
            LinkedIn
          </div>
        </div>
      </div>
    </>
  );
}
