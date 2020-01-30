import React from "react";

import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Link to={"/chien"}>Trouve un meilleur ami</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/partenaire"}>Nos partenaires</Link>
      </div>
      <div className="siteTitle">
        <Link to={"/"}>
          <h1>Adopte un chien</h1>
          <img src="/logoChien.svg" alt="logo" />
        </Link>
      </div>
    </div>
  );
}
