import styles from "./IhorKurylovUsersPage.module.css";
import {useEffect, useState} from "react";
import { onSnapshot, collection } from "firebase/firestore"
import db from "../../../firebase"
import {getMyInfo} from "../../../api/firebaseCalls";

interface MyInfo {
  age: number
  firstName: string
  id: string
  lastName: string
  position: string
}

const IhorKurylovUsersPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfo>();
  useEffect(() => {
    getMyInfo(setMyInfo)
  }, []);

  return (
    <div className={styles.container}>
      <h1>USERS</h1>
      {myInfo && (<div>
        <p>{myInfo.age}</p>
        <p>{myInfo.firstName}</p>
        <p>{myInfo.id}</p>
        <p>{myInfo.lastName}</p>
        <p>{myInfo.position}</p>

      </div>)}
    </div>
  );
};

export default IhorKurylovUsersPage;
