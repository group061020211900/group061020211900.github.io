import styles from "./IhorKurylovUsersPage.module.css";
import {useEffect, useState} from "react";
import { onSnapshot, collection } from "firebase/firestore"
import db from "../../../firebase"
import {addInfo, deleteInfo, editItem, getMyInfo, uploadFile} from "../../../api/firebaseCalls";
import {getInfo} from "../../../redux/actions/actionsPosts";
import {useDispatch, useSelector} from "react-redux";
import {Info} from "../../../common/appTypes";

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
  const dispatch = useDispatch();
  // const [myInfo, setMyInfo] = useState<MyInfo[]>([]);
  const [imageURL, setImageURL] = useState<string>();
  // @ts-ignore
  const myInfo = useSelector((state => state.postsReducer.info));
  // @ts-ignore
  const getInfoThunk = () => dispatch(getInfo());
  useEffect(() => {
    getInfoThunk();
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
      {myInfo?.map((item: Info, index: number) => {
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
