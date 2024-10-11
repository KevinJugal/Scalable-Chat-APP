'use client';
import { useState } from 'react';
import { useSocket } from '../context/socketProvider';
import classes from './page.module.css';

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div className={classes.page}>
      <div className={classes.messages}>
        {messages.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </div>
      <div>
        <input
          onChange={e => setMessage(e.target.value)}
          className={classes["chat-input"]}
          placeholder="Message..."
        />
        <button onClick={() => sendMessage(message)} className={classes["button"]}>Send</button>
      </div>
    </div>
  );
}
