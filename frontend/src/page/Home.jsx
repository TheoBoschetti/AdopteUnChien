import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import DogCard from "../component/DogCard";

const { backendApi } = require("../conf");

export default function Home() {
  const [dogInfos, setDogInfos] = useState([]);

  useEffect(() => {
    axios.get(`${backendApi}/dog?home=true`).then(res => {
      setDogInfos(res.data);
    });
  }, []);

  return (
    <div className="home">
      <div className="bannerImg">
        <img src="bannerDog.svg" alt="banniére" />
        <h2>Offrez leur une nouvelle vie pour transformer la votre</h2>
      </div>
      <img className="title" src="/titreHome1.png" alt="Pourquoi adopter ?" />
      <div className="adopteContainer">
        <img src="/adopteDog.png" alt="Chien adopté" />
        <p>
          La moitié des foyers européens partagent leur vie avec un animal de
          compagnie, ce qui pousse à s’interroger sur les motifs de leur
          adoption. Vous aurez le sentiment d'avoir accompli un acte utile en
          adoptant plutôt qu'en achetant votre chien. Vous lui offrirez son
          droit au bonheur et le voir s'épanouir dans votre foyer vous procurera
          des joies immenses. Si vous prenez un chien adulte, vous éviterez
          souvent la phase d'apprentissage et d'éducation, la majorité des
          chiens de plus d'un an sont propres, savent s'asseoir... Un animal
          adopté, une fois en confiance, vous sera éternellement reconnaissant
          du geste que vous aurez fait envers lui. Il sera d'autant plus proche
          de vous. En moyenne, l'adoption d'un chien coûte environ 130 euros
          alorsqu'il vous en coûtera entre 450 et 1500 euros pour un achat en
          élevage. Bien évidemment, cet argument ne doit pas être la motivation
          première, d'autant qu'il ne faut pas perdre de vue les frais
          d'entretien quotidien de l'animal: nourriture, vétérinaire,
          toilettage...
        </p>
      </div>
      <img
        className="title"
        src="/titreHome2.png"
        alt="Les nouveaux arrivants"
      />
      <div className="dogCardContainer">
        {dogInfos.map((dog, keyChain) => {
          return <DogCard key={keyChain} dogInfo={dog} />;
        })}
      </div>
    </div>
  );
}
