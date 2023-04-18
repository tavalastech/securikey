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
        <div class="containMore">
          <div class="contain">
            {/** Logo on screen **/}
            <img src="android-chrome-192x192.png" alt="Logo"></img>
            {/** Header */}
            <h1 class="title">SecuriKey</h1>
          </div>

          {/** Instructions */}
          <p class="inst">SecuriKey is a web application that allows you to test your password against not only general strength requirements, but also publicly known information you might post online.
           Information such as your pet's name, your favorite holiday, or your birthday.</p>
        </div>

        <EnterPassword></EnterPassword>
        <Button class = "signOutButton" onClick={signOut}>Sign Out</Button>
      </View>
      


  );
}


export default withAuthenticator(App); 

