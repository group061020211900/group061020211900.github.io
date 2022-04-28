import { useNavigate, Link } from "react-router-dom";
import React from "react";
import styles from "../Volodia/PageVolodia.module.css";
import FormControl from "./form/FormControl";

const PageVolodia = () => {
  const navigate = useNavigate();
  const skills = {
    HTML: "100%",
    CSS: "100%",
    jS: "70%",
    REACT: "40%",
  };
  const me = {
    language: "Ukrainian,English",
    name: "Volodia",
    age: "21",
  };

  return (
    <div className={styles.conteiner}>
      <h1 className={styles.h1}>Front-end developer</h1>
      <FormControl />

      <div className={styles.skills}>
        <ul>
          <h2>Skills</h2>
          <li>HTML- {skills.HTML}</li>
          <li>CSS- {skills.CSS}</li>
          <li> JS- {skills.jS}</li>
          <li>React- {skills.REACT} </li>
        </ul>
      </div>

      <div className={styles.me}>
        <ul>
          <h2>About me</h2>
          <li>Name-{me.name}</li>
          <li>Age-{me.age}</li>
          <li>language-{me.language} </li>
        </ul>
      </div>

      <button
        onClick={() => {
          navigate("/");
        }}
        className={styles.backToMain}
      >
        Go to the main page
      </button>
    </div>
  );
};

export default PageVolodia;
