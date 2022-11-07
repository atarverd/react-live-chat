import React from 'react'
import { formatRelative } from "date-fns";
import { useStyles } from './styles';

function Message({message,uid}) {
    const owner=message.uid===uid
    const styles=useStyles(owner)
  return (
    <div className={styles.msg}>
        <div className={styles.msgContainer}>
        {!owner && <div>
              <p>{message.displayName}</p>
              <img alt='borke' className={styles.msgImg} src={message.photoUrl}/>
            </div>}
            <div className={styles.msgText}>
                <p>{message.msgText}</p>
            </div>
            {owner && <div>
              <p>{message.displayName}</p>
              <img alt='borke' className={styles.msgImg} src={message.photoUrl}/>
            </div>}
        </div>
        <p className={styles.time}>{formatRelative(message.date.toDate(), new Date())}</p>  
    </div>
  )
}

export default Message