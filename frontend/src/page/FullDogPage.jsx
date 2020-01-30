import React, { useState, useEffect } from "react";
import "./FullDogPage.scss";
import Axios from "axios";
import DogCard from "../component/DogCard";
const { backendApi } = require("../conf");

export default function FullDogPage() {
  const [dogInfos, setDogInfos] = useState([]);

  useEffect(() => {
    Axios.get(`${backendApi}/dog`).then(res => {
      setDogInfos(res.data);
    });
  }, []);

  return (
    <div className="fullDogPage">
      <img
        className="fullDogPageTitle"
        src="/titreFullDogPage.png"
        alt="Trouver votre meilleur ami"
      />
      <div className="allDogConatainer">
        {dogInfos.map(dog => {
          return <DogCard dogInfo={dog} />;
        })}
      </div>
    </div>
  );
}
