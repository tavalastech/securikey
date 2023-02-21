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



function App({ signOut }) {
  return (
      <View className="App">
        <EnterPassword></EnterPassword>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
  );
}

export default withAuthenticator(App);
