/* These are the variables that store the REGEX string 
   that test the password input */
const fullregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ]).{8,}$/;
const numbers = /^(?=.*\d)/;
const lowercase = /^(?=.*[a-z])/;
const uppercase = /^(?=.*[A-Z])/;
const special = /^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ])/;
const length = /.{8,}$/;

/* These are the function that test the password input and 
   returns true or false */ 

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