import {
    collection,
    query,
    onSnapshot,
    where,
  } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
export const useGetMessages=()=>{
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "messages"), where("date", ">", new Date()));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const result = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            result.push(doc.data());
          });
          setMessages(result);
        });
        return ()=>unsubscribe()
      }, []);
      return messages
}