import React from 'react';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Channel from './Channel';
import NavigationBar from "./Navbar";


firebase.initializeApp({
  apiKey: "AIzaSyAXfHgDEPKf9pem_6UpHxbw_YZ2RqpcCzM",
  authDomain: "hackfrostwebapp.firebaseapp.com",
  projectId: "hackfrostwebapp",
  storageBucket: "hackfrostwebapp.appspot.com",
  messagingSenderId: "812491169380",
  appId: "1:812491169380:web:12c64ae5ccd37377d58971",
  measurementId: "G-GQ6FLF4PNW"
});

//database and authorization variables
const auth = firebase.auth();
const db = firebase.firestore();

const StyledButton = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid black;
color: black;
margin: 0 1em;
padding: 0.25em 1em;
` 


function Chat() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  //if autorization state changed, user is set to null
  useEffect(() => {
    const logout = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return logout;
  }, []);

  //sign in using google
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  //sign out
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  //if initializing, loading... will show up on the screen
  if (initializing) return "Loading";

  //return a sign out button if user is signed in, return a sign in with google button if user is signed out
  return (
    <div>
        <NavigationBar/>
        <div className="homebackground-expandable">
        {user ? (
        <>
            <StyledButton className="signOutBtn" onClick={signOut}>Sign out</StyledButton>
            <Channel user={user} db={db}/>
        </>
        ) : (
            <StyledButton className="signInBtn" onClick={signInWithGoogle}>Sign in with Google</StyledButton>
        )}
        </div>
    </div>
  );
}

export default Chat;