import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Message from './Message';
import styled from 'styled-components';


const Channel = ({ user = null, db = null}) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const {uid, displayName, photoURL} = user;


    //returns all messages from database
    useEffect(() => {
        if (db) {
            const sentMessage = db
            .collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ... doc.data(),
                    id: doc.id
                }));
                setMessages(data)
            });

            return sentMessage;
        }
    }, [db]);

    const handleOnChange = e => {
        setNewMessage(e.target.value);
    };

    //when send button is pressed, created message will be added to the firestore database
    const handleOnSubmit = e => {
        e.preventDefault();

        if (db) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL,
            });
            setNewMessage("");
        }
    }

    return (
        <div>
            <div className=" d-flex justify-content-center w-100 border" >
            <h2>Chat</h2>
            <div className="messageBox" style={{ width: "50%" }}>
            <ul>
                {messages.map(message => (
                    <li  key={message.id}>
                        < Message {... message} />
                    </li>
                ))}
            </ul>
            <div className="input mb-5">
            <form onSubmit={handleOnSubmit} >
                <input
                className="inputTxt"  
                type="text"
                value={newMessage}
                onChange={handleOnChange}
                placeholder="Type your message here..."
                style={{ width: "75%" }}
            />
            <button  type="submit" disabled={!newMessage}>
                Send
            </button>
            </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Channel;