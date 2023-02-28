export function logPassword(passwordToCheck) {
  const fullregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  const numbers = /^(?=.*\d)/;
  const lowercase = /^(?=.*[a-z])/;
  const uppercase = /^(?=.*[A-Z])/;
  const special = /^(?=.*["'()*,-./:;<>?_`~@#$%^&+=!\][}{|\\ ])/;
  const length = /.{8,}$/;

  console.log("Numbers: ", numbers.test(passwordToCheck));
  console.log("Lowercase: ", lowercase.test(passwordToCheck));
  console.log("Uppercase: ", uppercase.test(passwordToCheck));
  console.log("Special character: ", special.test(passwordToCheck));
  console.log(">= 8: ", length.test(passwordToCheck));
  console.log("Overall:", fullregex.test(passwordToCheck));
}


