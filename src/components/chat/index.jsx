import React from 'react'
import { useGetMessages } from '../../hooks/useGetMessages';
import { useState } from 'react';
import { useSendMessage } from '../../hooks/useSendMessage';
import Message from './message';
import { useStyles } from './styles';
function Chat({user}) {
    
    const [text, setText] = useState("");
    const messages=useGetMessages()
    const sendMsg=useSendMessage()
    const styles=useStyles()

    const handleSend=()=>{
      if(text){
        sendMsg(user,text)
        setText('')
      }
    }
  return (
    <div>
        
        <div className={styles.chatArea}>
          {messages.map((message) => (
          <div className={styles.chat}>
          <Message message={message} uid={user.uid}/>
          </div>
        ))}
        </div>
     <div className={styles.inputDiv}>
     <textarea className={styles.input} onChange={(e) => setText(e.target.value)} value={text} />
      <button className={styles.btn} onClick={handleSend}>Send</button>
     </div>
    </div>
  )
}

export default Chat