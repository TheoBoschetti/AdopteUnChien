import React from "react";

import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <img src="/logoChien.svg" alt="logo" />
      <div>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/mentions-légales"}>Mentions légales</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <img src="/logoChien.svg" alt="logo" />
    </div>
  );
}
