import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./DogPageById.scss";
import { useForm } from "react-hook-form";
const { backendApi } = require("../conf");

export default function DogPageByid(props) {
  const [dogInfo, setDogInfo] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  useEffect(() => {
    Axios.get(`${backendApi}/dog/${props.match.params.id}`).then(res => {
      setDogInfo(res.data[0]);
    });
  }, [props.match.params.id]);

  return (
    <div className="dogPageById">
      <div className="dogPageTitle">
        <img src="/dogLeft.png" alt="Chien" />
        <p>{dogInfo.name}</p>
        <img src="/dogRight.png" alt="Chien" />
      </div>
      <div className="dogInfoContainer">
        <img src={dogInfo.img} alt={dogInfo.name} />
        <div>
          <p>
            <strong>Sexe</strong> : {dogInfo.sexe}
          </p>
          <p>
            <strong>Race</strong> : {dogInfo.race}
          </p>
          <p>
            <strong>Informations</strong> : {dogInfo.resume}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setDisplayForm(!displayForm);
        }}
      >
        <p>Je remplis une demande d'adoption</p>
      </button>
      {displayForm ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Prénom"
            name="firstname"
            ref={register({
              required: "Champ obligatoire"
            })}
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}

          <input
            type="text"
            placeholder="Nom"
            name="lastname"
            ref={register({
              required: "Champ obligatoire"
            })}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Champ obligatoire",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="number"
            placeholder="Téléphone"
            name="phone_number"
            ref={register({
              required: "Champ obligatoire",
              minLength: {
                value: 10,
                message: "Minimum 10 chiffres"
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 chiffres"
              }
            })}
          />
          {errors.phone_number && <p>{errors.phone_number.message}</p>}
          <input
            type="text"
            placeholder="Votre message ..."
            name="message"
            ref={register({ max: 1000 })}
          />

          <input value="Envoyer" type="submit" />
        </form>
      ) : null}
    </div>
  );
}
