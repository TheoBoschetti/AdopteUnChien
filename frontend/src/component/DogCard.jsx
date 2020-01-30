import React from "react";
import "./DogCard.scss";

export default function DogCard({ dogInfo }) {
  return (
    <div className="dogCard">
      <img src={dogInfo.img} alt={dogInfo.name} />
      <div className="dogInfo">
        <p>{dogInfo.name}</p>
        <p>{dogInfo.sexe}</p>
        <p>{dogInfo.race}</p>
        <p>{`${dogInfo.city}(${dogInfo.postal_code})`}</p>
      </div>
    </div>
  );
}
