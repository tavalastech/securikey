import React, {useState, useRef} from 'react'
import logPassword from '../functions/backend';


export default function EnterPassword() {

    const [passwordToCheck, setPasswordToCheck] = useState(["Password"]);
    const passwordRef = useRef() 

    function onSubmit(e) {
       const password = passwordRef.current.value;
       if (password === '') return
       logPassword(password)
    }

  return (
    <>
      <input ref={passwordRef} type="text"/>
      <button class = "password" onClick={onSubmit}>Submit</button>
    </>
  );
}
