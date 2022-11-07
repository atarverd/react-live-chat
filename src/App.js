import "./App.css";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Chat from "./components/chat";
import Header from "./components/header";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
  }, []);
  return (
    <div className="App">
      <Header user={user} />
      {user && <Chat user={user} />}
    </div>
  );
}

export default App;
