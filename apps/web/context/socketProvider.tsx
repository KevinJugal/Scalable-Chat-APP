'use client'

import { on } from 'events';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { io,Socket } from 'socket.io-client'

interface SocketProvideProps{
    children? : React.ReactNode
}

interface ISocketContext {
    sendMessage : (msg:String) => any;
    messages : string[];
}

const socketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
    const state = useContext(socketContext);
    if (!state) throw new Error(`state is undefined`);

    return state;
};

export const SocketProvider: React.FC<SocketProvideProps> = ({children}) => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<string[]>([])
    const sendMessage : ISocketContext["sendMessage"] = useCallback((msg)=>{
        console.log("Send message", msg);
        if(socket){
            socket.emit("event:message", {message:msg});
        }
    },[socket]);

    const onMessageRec = useCallback((msg:string)=>{
        console.log("From server msg rec. ", msg);
        const {message} = JSON.parse(msg) as {message:string};
        setMessages(prev=>[...prev,message])
    },[]); 

    useEffect(()=>{
        const _socket = io('http://localhost:8000');
        _socket.on('message', onMessageRec)
        setSocket(_socket)

        return () => {
            _socket.disconnect();
            _socket.off('message', onMessageRec)
            setSocket(undefined)
        }
    },[])
    return (
        <socketContext.Provider value={{ sendMessage, messages }}>
            {children}
        </socketContext.Provider>
    );
};