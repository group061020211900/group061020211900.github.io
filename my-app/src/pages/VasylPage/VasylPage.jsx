import { useState } from "react";
import photo from "./photos/photo.jpg";
import styles from "./VasylPage.module.css";
import { useNavigate } from "react-router-dom";
import { JSONPlaceholder } from "../../api/api";

const VasylPage = () => {
  const ToHome = useNavigate();
  const [info, setInfo] = useState({
    name: "Василь Яцишин",
    age: 15,
    photo: photo,
  });
  const [com, setCom] = useState();

  const getData = () => {
    JSONPlaceholder.getUsers()
      .then((response) => {
        var data = response.data;
        for (let i = 0; i < response.data.length; i++) {
            console.log("Name:" + data[i].name);
            console.log("Id:" + data[i].id);
        }
        const comment = data.map((el) => {
          setCom(el.name);
        });
      })
      .catch((e) => {
        e.response.status !== 200 &&
          console.log(`Error number ${e.response.status}`);
      });
  };
  return (
    <div className={styles.VasylPage}>
      <img src={info.photo} className={styles.photo}></img>
      <h1>Ім'я: {info.name}</h1>
      <h2>Вік: {info.age}</h2>
      <h2>{com}</h2>
      <button onClick={getData}>Get data from host</button>
      <button onClick={() => ToHome("/")}>To home</button>
    </div>
  );
};

export default VasylPage;
