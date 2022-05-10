import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";

export const getMyInfo = (setMyInfo) => {
    onSnapshot(collection(db, "profileInfo"), (snapshot)=> {
        // @ts-ignore
        return setMyInfo(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))[0]);
    })
}