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

import React, { useState, useRef } from "react"; // Import React + React Hooks
import {
  testNumbers,
  testLowercase,
  testUppercase,
  testSpecial,
  testLength,
  testOverall,
  containsAddress,
  containsBirthday,
  containsFavoriteNumber,
  containsFirstName,
  containsHoliday,
  containsHometown,
  containsKidsBirthdays,
  containsKidsFirstNames,
  containsKidsLastNames,
  containsLastName,
  containsMiddleName,
  containsParentFirstNames,
  containsParentLastNames,
  containsPetName,
  containsSignificantDates,
  containsSportsTeams,
  containsSpouseFirstName,
  containsSpouseLastName,
  strengthScore,
} from "../functions/backend"; // Import Backend Functions
import "../App.css";

// This is where we write the EnterPassword component

export default function EnterPassword() {
  // useRef is a React Hook that allows the user to reference the input function
  const passwordRef = useRef();
  const addressRef = useRef();
  const birthdayRef = useRef();
  const favoriteNumberRef = useRef();
  const firstNameRef = useRef();
  const holidayRef = useRef();
  const hometownRef = useRef();
  const kidsBirthdaysRef = useRef();
  const kidsFirstNamesRef = useRef();
  const kidsLastNamesRef = useRef();
  const lastNameRef = useRef();
  const middleNameRef = useRef();
  const parentFirstNamesRef = useRef();
  const parentLastNamesRef = useRef();
  const petNameRef = useRef();
  const significantDatesRef = useRef();
  const sportsTeamsRef = useRef();
  const spouseFirstNameRef = useRef();
  const spouseLastNameRef = useRef();

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
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [favoriteNumber, setFavoriteNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kidsLastNames, setKidsLastNames] = useState("");
  const [kidsFirstNames, setKidsFirstNames] = useState("");
  const [kidsBirthdays, setKidsBirthdays] = useState("");
  const [holiday, setHoliday] = useState("");
  const [hometown, setHometown] = useState("");
  const [parentFirstNames, setParentFirstNames] = useState("");
  const [parentLastNames, setParentLastNames] = useState("");
  const [petName, setPetName] = useState("");
  const [significantDates, setSignificantDates] = useState("");
  const [sportsTeams, setSportsTeams] = useState("");
  const [spouseFirstName, setSpouseFirstName] = useState("");
  const [spouseLastName, setSpouseLastName] = useState("");
  const [score, setScore] = useState(""); 
  /*  On Submit Function 
  
      On press of the submit button, the function grabs the password input and executes 
      the various imported functions. 
      The imported functions accept the password input as a parameter. 
      The returned values are then assigned to the various state variables using setState.

  */

  // Functions To Password and Assigns To State Variable
  function onSubmit(e) {
    const password = passwordRef.current.value;
    const address = addressRef.current.value;
    const birthday = birthdayRef.current.value;
    const favoriteNumber = favoriteNumberRef.current.value;
    const firstName = firstNameRef.current.value;
    const middleName = middleNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const kidsLastName = kidsLastNamesRef.current.value;
    const kidsFirstNames = kidsFirstNamesRef.current.value;
    const kidsBirthdays = kidsBirthdaysRef.current.value;
    const holiday = holidayRef.current.value;
    const hometown = hometownRef.current.value;
    const parentFirstNames = parentFirstNamesRef.current.value;
    const parentLastNames = parentLastNamesRef.current.value;
    const petName = petNameRef.current.value;
    const significantDates = significantDatesRef.current.value;
    const sportsTeams = sportsTeamsRef.current.value;
    const spouseFirstName = spouseFirstNameRef.current.value;
    const spouseLastName = spouseLastNameRef.current.value;
    

    if (password === "") return;
    setNumber(testNumbers(password) + "");
    setLowercase(testLowercase(password) + "");
    setUppercase(testUppercase(password) + "");
    setSpecial(testSpecial(password) + "");
    setLength(testLength(password) + "");
    setOverall(testOverall(password) + "");
    setAddress(containsAddress(password, address) + "");
    setBirthday(containsBirthday(password, birthday) + "");
    setFavoriteNumber(containsFavoriteNumber(password, favoriteNumber) + "");
    setFirstName(containsFirstName(password, firstName) + "");
    setHoliday(containsHoliday(password, holiday) + "");
    setHometown(containsHometown(password, hometown) + "");
    setKidsBirthdays(containsKidsBirthdays(password, kidsBirthdays) + "");
    setKidsFirstNames(containsKidsFirstNames(password, kidsFirstNames) + "");
    setKidsLastNames(containsKidsLastNames(password, kidsLastName) + "");
    setLastName(containsLastName(password, lastName) + "");
    setMiddleName(containsMiddleName(password, middleName) + "");
    setParentFirstNames(
      containsParentFirstNames(password, parentFirstNames) + ""
    );
    setParentLastNames(containsParentLastNames(password, parentLastNames) + "");
    setPetName(containsPetName(password, petName) + "");
    setSignificantDates(
      containsSignificantDates(password, significantDates) + ""
    );
    setSportsTeams(containsSportsTeams(password, sportsTeams) + "");
    setSpouseFirstName(containsSpouseFirstName(password, spouseFirstName) + "");
    setSpouseLastName(containsSpouseLastName(password, spouseLastName) + "");

    setScore(strengthScore() + "");
    setIsShown((current) => !current);
    
}

  // Returns HTML component

  return (
    <>
      <div class="input-container">
        <div class="input" >Address:<input ref={addressRef} type="text" /></div>
        <div class="input" >First Name: <input  ref={firstNameRef} type="text" /></div>
        <div class="input" >Last Name:<input  ref={lastNameRef} type="text" /></div>
        <div class="input" >Middle Name:<input  ref={middleNameRef} type="text" /></div>
        <div class="input" >Birthday:<input  ref={birthdayRef} type="text" /></div>
        <div class="input" >Favorite Number:<input  ref={favoriteNumberRef} type="text" /></div>
        <div class="input" >Significant Dates:<input  ref={significantDatesRef} type="text" /></div>
        <div class="input" >Favorite Holiday:<input  ref={holidayRef} type="text" /></div>
        <div class="input" >Favorite Sports Team<input  ref={sportsTeamsRef} type="text" /></div>
        <div class="input" >Hometown:<input  ref={hometownRef} type="text" /></div>
        <div class="input" >Pet Names: <input  ref={petNameRef} type="text" /></div>
        <div class="input" >Spouse's First Name:<input  ref={spouseFirstNameRef} type="text" /></div>
        <div class="input" >Spouse's Last Name:<input  ref={spouseLastNameRef} type="text" /></div>
        <div class="input" >Parent's First Name:<input  ref={parentFirstNamesRef} type="text" /></div>
        <div class="input" >Parent's Last Name:<input  ref={parentLastNamesRef} type="text" /></div>
        <div class="input" >Child's First Name:<input  ref={kidsFirstNamesRef} type="text" /></div>
        <div class="input" >Child's Last Name:<input  ref={kidsLastNamesRef} type="text" /></div>
        <div class="input" >Child's Birthday:<input  ref={kidsBirthdaysRef} type="text" /></div>
       </div>
        <div class="inputPass" >Enter Password<input  ref={passwordRef} type="text" /></div>
      

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
            <div>Does it contain my address: {address}</div>
            <div>Does it contain my first name: {firstName}</div>
            <div>Does it contain my last name: {lastName}</div>
            <div>Does it contain my middle name: {middleName}</div>
            <div>Does it contain my birthday: {birthday}</div>
            <div>Does it contain my favorite number: {favoriteNumber}</div>
            <div>Does it contain my significant dates: {significantDates}</div>
            <div>Does it contain my favorite holiday: {holiday}</div>
            <div>Does it contain my favorite sports teams: {sportsTeams}</div>
            <div>Does it contain my hometown: {hometown}</div>
            <div>Does it contain my pet's name: {petName}</div>
            <div>Does it contain my spouse's first name: {spouseFirstName}</div>
            <div>Does it contain my spouse's last name: {spouseLastName}</div>
            <div>
              Does it contain my parents' first names: {parentFirstNames}
            </div>
            <div>Does it contain my parents' last names: {parentLastNames}</div>
            <div>Does it contain my kids' first names: {kidsFirstNames}</div>
            <div>Does it contain my kids' last names: {kidsLastNames}</div>
            <div>Does it contain my kids' birthdays: {kidsBirthdays}</div>
          </section>
          <h2>Does This Password Pass The Test? {overall.toUpperCase()}</h2>
          <h2>Does This Password Pass The Test: {overall}</h2>
          <h2>Strength Score: {score}</h2>
        </div>
      )}
    </>
  );
}
