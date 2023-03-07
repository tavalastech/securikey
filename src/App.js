import React, { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import test from "./functions/backend";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import EnterPassword from "./components/EnterPassword";
import './App.css'
import Footer from './Footer'



//change the tab heading
var title = document.querySelector('title');
title.innerText = 'SecuriKey';

//the signout function
function App({ signOut }) {
  return (
      <View className="App">
        {/** Header */}
        <h1 class="title">SecuriKey</h1>
        {/** Instuctions */}
        <p>Enter your password to be checked against general strength parameters.</p>
        <EnterPassword></EnterPassword>
        <Button class = "signOutButton" onClick={signOut}>Sign Out</Button>
      </View>
      
  );
}

//trying to get a stupid footer to work
function App2() {
  return(
    <Footer />
  )
}

//logo on screen
const img = document.createElement("img");
img.src = "android-chrome-192x192.png";
document.body.appendChild(img);



export default withAuthenticator(App, App2); 

