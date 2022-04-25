import { useState } from "react";
import styles from "./VasylPage.module.css";
import { useNavigate } from "react-router-dom";
import { JSONPlaceholder } from "../../api/api";
const VasylPage = () => {
  var arr = [];
  const ToHome = useNavigate();
  const [com, setCom] = useState(arr);
  const [showComp, setShow] = useState(false);
  const [info, setInfo] = useState({
    name: "Василь Яцишин",
    age: 15,
  });
  const GetData = () => {
    JSONPlaceholder.getUsers()
      .then((response) => {
        var data = response.data;
        const comment = data.map((el) => {
          arr.push(el);
        });
        setShow(true);
        setCom(arr);
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
      <button
        onClick={() => {
          GetData();
        }}
      >
        Get data from host
      </button>
      <div>
        {showComp === true
          ? com.map((el) => <h1 key={Math.random()}>{el.name}</h1>)
          : null}
      </div>
      <button onClick={() => ToHome("/")}>To home</button>
    </div>
  );
};

export default VasylPage;
