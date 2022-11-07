import React from 'react'
import { useAuth } from "../../hooks/useAuth";
import { useStyles } from './styles';
function Header({user}) {
    const { signInWithGoogle,logout } = useAuth();
    const styles=useStyles()
  return (
    <div className={styles.header}>
       <button className={styles.btn} onClick={user?logout:signInWithGoogle}>{user?'Sign out':'Sign in'}</button>
    </div>
  )
}

export default Header