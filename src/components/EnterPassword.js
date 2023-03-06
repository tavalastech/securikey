import React, { useState, useRef,  } from "react";
import { testNumbers, testLowercase, testUppercase, testSpecial, testLength, testOverall  } from "../functions/backend";

export default function EnterPassword() {

  // React Hooks
  const passwordRef = useRef();
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState("");
  const [lowercase, setLowercase] = useState(""); 
  const [uppercase, setUppercase] = useState(""); 
  const [special, setSpecial] = useState("");
  const [length, setLength] = useState(""); 
  const [overall, setOverall] = useState(""); 



  // On Submit Function
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

  return (
    <>
      <input ref={passwordRef} type="text" />
      <button class ="submitButton" onClick={onSubmit}>Submit</button>

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
          <h2>Does This Password Pass The Test: {overall}</h2>

          
        </div>
      )}
    </>
  );
}
