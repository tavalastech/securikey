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

//change the tab heading
var title = document.querySelector('title');
title.innerText = 'SecuriKey';

//the signout function
function App({ signOut }) {
  return (
      <View className="App">
        <h1 class="title">SecuriKey</h1>
        <p>Enter your password to be checked against general strength parameters.</p>
        <EnterPassword></EnterPassword>
        <Button class = "signOutButton" onClick={signOut}>Sign Out</Button>
      </View>
      
  );
}

//logo on screen
const img = document.createElement("img");
img.src = "android-chrome-192x192.png";
document.body.appendChild(img);

export default withAuthenticator(App, App2); 

