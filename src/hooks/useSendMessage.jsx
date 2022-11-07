import { collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { addDoc } from "firebase/firestore";
export const useSendMessage=()=>{
    const sendMsg = async (user,text) => {
        await addDoc(collection(db, "messages"), {
          date: new Date(),
          displayName: user.displayName,
          photoUrl: user.photoURL,
          msgText: text,
          uid: user.uid,
        });
      };
      return sendMsg
}