import { signInWithPopup,GoogleAuthProvider,signOut} from "firebase/auth";
import { auth } from "../firebase-config";
export const useAuth=()=>{
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(console.log);
      };
      const logout = () => {
        try {
          signOut(auth);
        } catch (err) {
          console.log(err.msg);
        }
      };
      return {signInWithGoogle,logout}
}