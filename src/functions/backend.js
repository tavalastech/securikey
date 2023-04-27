/* These are the variables that store the REGEX passwordToChecking 
   that test the password input */
   const fullregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ]).{8,}$/;
   const numbers = /^(?=.*\d)/;
   const lowercase = /^(?=.*[a-z])/;
   const uppercase = /^(?=.*[A-Z])/;
   const special = /^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ])/;
   const length = /.{8,}$/;
   
   /* These are the function that test the password input and 
      returns true or false */ 
   
   let count = 0;
   let totalCount = 0;
   let totalStrengthScore = 0;
   
   export function testNumbers (passwordToCheck) { 
     return (numbers.test(passwordToCheck))
   }
   
   export function testLowercase (passwordToCheck) { 
     return (lowercase.test(passwordToCheck))
   }
   
   export function testUppercase (passwordToCheck) { 
     return (uppercase.test(passwordToCheck))
   }
   
   export function testSpecial (passwordToCheck) { 
     return (special.test(passwordToCheck))
   }
   
   export function testLength (passwordToCheck) { 
     return (length.test(passwordToCheck))
   }
   
   export function testOverall (passwordToCheck) { 
     return (fullregex.test(passwordToCheck))
   }
   
   export function containsFirstName(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
  
   
   export function containsMiddleName(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsLastName(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsPetName(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsParentFirstNames(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsParentLastNames(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsSpouseFirstName(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsSpouseLastName(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsKidsFirstNames(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsKidsLastNames(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsBirthday(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsKidsBirthdays(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsHometown(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsSportsTeams(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsHoliday(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsSignificantDates(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsFavoriteNumber(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function containsAddress(passwordToCheck, pkiValueEntered) {
    if (pkiValueEntered === "") {
      return false;
    } else if (passwordToCheck.includes(pkiValueEntered)) {
      totalCount++;
      return true;
    } else {
      count++;
      totalCount++;
      return false;
    }
  }
   
   export function strengthScore(count, totalCount){
     totalStrengthScore = count/totalCount;
     return totalStrengthScore;
   }