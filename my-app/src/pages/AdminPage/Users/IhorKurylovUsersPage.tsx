import styles from "./IhorKurylovUsersPage.module.css";
import {useEffect, useState} from "react";
import { onSnapshot, collection } from "firebase/firestore"
import db from "../../../firebase"
import {addInfo, deleteInfo, editItem, getMyInfo, uploadFile} from "../../../api/firebaseCalls";

export interface MyInfo {
  age: number
  firstName: string
  id?: string
  lastName: string
  position: string
  url?: string
}

const newInfo =  {
  age: 122,
  firstName: "string",
  lastName: "string",
  position: "string",
}

const IhorKurylovUsersPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfo[]>([]);
  const [imageURL, setImageURL] = useState<string>();
  useEffect(() => {
    getMyInfo(setMyInfo)
  }, []);
const handleUpload = (e:any) =>{
  e.preventDefault();
  const file = e?.target[0]?.files[0]
  if(!file) return;
  uploadFile(file, setImageURL);
}

  return (
    <div className={styles.container}>
      <h1>USERS</h1>
      <form onSubmit={handleUpload}>
        <input type="file"/>
        <button type="submit">Upload image</button>
      </form>
      <button
      onClick={() => addInfo(newInfo)}
      >ADDDD</button>
      {myInfo?.map((item, index) => {
        console.log(item)
      return (
        <div
          key={index}
        >
          <button
          onClick = {() => editItem(item?.id, {
            age: 35,
            firstName: "Ihor",
            lastName: "string",
            position: "string",
            url: imageURL ? imageURL : ""
          })}>
            Edit Item
          </button>
          <button
            onClick={()=> deleteInfo(item?.id)}>
            Delete
          </button>
        <p>{item.age}</p>
        <p>{item.firstName}</p>
        <p>{item.id}</p>
        <p>{item.lastName}</p>
        <p>{item.position}</p>
          {item?.url && <img src={item.url} style={{height: "200px"}} alt=""/>}
        <br/>
        <br/>
        <br/>
      </div>)})}
    </div>
  );
};

export default IhorKurylovUsersPage;
