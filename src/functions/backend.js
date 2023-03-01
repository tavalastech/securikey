// export function logPassword(passwordToCheck) {
//   const fullregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
//   const numbers = /^(?=.*\d)/;
//   const lowercase = /^(?=.*[a-z])/;
//   const uppercase = /^(?=.*[A-Z])/;
//   const special = /^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ])/;
//   const length = /.{8,}$/;

//   console.log("Numbers: ", numbers.test(passwordToCheck));
//   console.log("Lowercase: ", lowercase.test(passwordToCheck));
//   console.log("Uppercase: ", uppercase.test(passwordToCheck));
//   console.log("Special character: ", special.test(passwordToCheck));
//   console.log(">= 8: ", length.test(passwordToCheck));
//   console.log("Overall:", fullregex.test(passwordToCheck));
// }

const fullregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ]).{8,}$/;
const numbers = /^(?=.*\d)/;
const lowercase = /^(?=.*[a-z])/;
const uppercase = /^(?=.*[A-Z])/;
const special = /^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ])/;
const length = /.{8,}$/;

// export function testPassword(passwordToCheck){
//   const fullregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
//   return (fullregex.test(passwordToCheck));
// }

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