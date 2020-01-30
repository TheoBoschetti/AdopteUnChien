import React from "react";
import "./DogCard.scss";
import { Link } from "react-router-dom";

export default function DogCard({ dogInfo }) {
  return (
    <div className="dogCard">
      <Link to={`/dog/${dogInfo.id}`}>
        <img src={dogInfo.img} alt={dogInfo.name} />
        <div className="dogInfo">
          <p>{dogInfo.name}</p>
          <p>{dogInfo.sexe}</p>
          <p>{dogInfo.race}</p>
          <p>{`${dogInfo.city}(${dogInfo.postal_code})`}</p>
        </div>
      </Link>
    </div>
  );
}
