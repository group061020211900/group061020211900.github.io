import { collection, onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import db, {app, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { MyInfo } from "../pages/AdminPage/Users/IhorKurylovUsersPage";
import { CombinedState } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Info, Post, PostReducerActionTypes } from "../common/appTypes";
import {actionsPosts} from "../redux/actions/actionsPosts";

export const getMyInfo = (dispatch: ThunkDispatch<CombinedState<{ postsReducer: { posts: any; isLoading: boolean; morePosts: number[]; info?: Info[] | undefined; } | { isLoading: any; posts: Post[]; morePosts: number[]; info?: Info[] | undefined; } | { info: any; posts: Post[]; isLoading: boolean; morePosts: number[]; }; VitrikushReducer: { login: { email: string; name: string; password: string; verifyPassword: string; }; }; DanyloReducer: { login: { email: string; name: string; password: string; verifyPassword: string; }; }; }>, unknown, PostReducerActionTypes>) => {
    const collectionRef = collection(db, "profileInfo");
    onSnapshot(collectionRef, (snapshot)=> {
        // @ts-ignore
        return dispatch(actionsPosts.setMyInfo(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
    })
};

export const addInfo = async (data: MyInfo) => {
    const collectionRef = collection(db, "profileInfo");
    const docRef = await addDoc(collectionRef, data)
    docRef.id && console.log("id")
    console.log(docRef)
}

export const deleteInfo = async (id="") => {
    const docRef = doc(db,  "profileInfo", id)
  await deleteDoc(docRef);
}

export const editItem = async (id="", item: any) => {
    console.log("edit")
    const docRef = doc(db,  "profileInfo", id)
    await setDoc(docRef, item );
}

export const uploadFile = (file: any, setImageURL: (s:string) => void) => {
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadData = uploadBytesResumable(storageRef, file);

    uploadData.on("state_changed", (snapshot: any) => {
        const prog = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log(prog);
    }, (err: any) => console.log(err),
      ()=> {
        // @ts-ignore
          getDownloadURL(uploadData.snapshot.ref)
            .then(url => {
                console.log(url)
                setImageURL(url)
            })
      }
    )



}