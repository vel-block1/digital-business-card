import React from "react";
import "./Footer.css";
import twitterIcon from "../assets/Twitter Icon.svg";
import fbIcon from "../assets/Facebook Icon.svg";
import instaIcon from "../assets/Instagram Icon.svg";
import gitIcon from "../assets/GitHub Icon.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img src={twitterIcon} alt="FB Icon" />
        <img src={fbIcon} alt="FB Icon" />
        <img src={instaIcon} alt="FB Icon" />
        <img src={gitIcon} alt="FB Icon" />
      </footer>
    </>
  );
}
