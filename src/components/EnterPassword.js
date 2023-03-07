/** 
 *  EnterPassword.js 
 *  Richard Charity
 * 
 *  Enter Password is a React Component
 * 
 *  It's the part of the screen that allows the user to input, 
 *  submit and show the password test results to the screen. 
 * 
 */

import React, { useState, useRef } from "react";  // Import React + React Hooks
import {
  testNumbers,
  testLowercase,
  testUppercase,
  testSpecial,
  testLength,
  testOverall,
} from "../functions/backend"; // Import Backend Functions



// This is where we write the EnterPassword component

export default function EnterPassword() {
  // useRef is a React Hook that allows the user to reference the input function
  const passwordRef = useRef();

  /* State Variables
      
      useState - We initialize our state by calling useState in our function component

      useState accepts an initial state and returns two values:

        - The current state
        - A function that updates the state
      
        import { useState } from "react";

        function FavoriteColor() {
          const [color, setColor] = useState("");
        }

        Notice that again, we are destructuring the returned values from useState.

        The first value, color, is our current state.

        The second value, setColor, is the function that is used to update our state.
        
        Lastly, we set the initial state to an empty string: useState("")

  */

  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState("");
  const [lowercase, setLowercase] = useState("");
  const [uppercase, setUppercase] = useState("");
  const [special, setSpecial] = useState("");
  const [length, setLength] = useState("");
  const [overall, setOverall] = useState("");

  /*  On Submit Function 
  
      On press of the submit button, the function grabs the password input and executes 
      the various imported functions. 
      The imported functions accept the password input as a parameter. 
      The returned values are then assigned to the various state variables using setState.

  */

  // Functions To Password and Assigns To State Variable
  function onSubmit(e) {
    const password = passwordRef.current.value;
    if (password === "") return;
    setNumber(testNumbers(password) + "");
    setLowercase(testLowercase(password) + "");
    setUppercase(testUppercase(password) + "");
    setSpecial(testSpecial(password) + "");
    setLength(testLength(password) + "");
    setOverall(testOverall(password) + "");
    setIsShown((current) => !current);
  
  }

  // Returns HTML component

  return (
    <>
      <input ref={passwordRef} type="text" />
      <button class="submitButton" onClick={onSubmit}>
        Submit
      </button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          
          <h1>Password Strength Test Results</h1>
          <section>
            <div>Does it contain a number: {number}</div>
            <div>Does it contain a lowercase letter: {lowercase}</div>
            <div>Does it contain a uppercase letter: {uppercase}</div>
            <div>Does it contain a special character: {special}</div>
            <div>Is it atleast 8 characters long: {length}</div>
          </section>
          <h2>Does This Password Pass The Test? {overall.toUpperCase()}</h2>
          <h2>Does This Password Pass The Test: {overall}</h2>

          
        </div>
      )}
    </>
  );
}
