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
            <img class="logo-img" src="android-chrome-192x192.png" alt="Logo"></img>
            {/** Header */}
            <h1 class="title">SecuriKey</h1>
          </div>

          {/** Instructions */}
          <p class="inst">SecuriKey allows you to test a password against general strength requirements as well as personal information you might post online.
            Insert one value per field with no additional spaces and click the Submit button. If value does not apply, leave the field blank. 
           </p>
        </div>

        <EnterPassword></EnterPassword>

        <Button class = "signOutButton" onClick={signOut}>Sign Out</Button>
      </View>
      


  );
}


export default withAuthenticator(App); 

