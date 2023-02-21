import React, {useState, useRef, Text} from 'react'
import { logPassword, logPasswordUpper } from "../functions/backend";


export default function EnterPassword() {

    const passwordRef = useRef() 



    const {printPassword, setPrintPassword} = useState([])

    function onSubmit(e) {
       const password = passwordRef.current.value;
       if (password === '') return
       
       logPassword(password)
       printPassword = logPasswordUpper(password)
    }

  return (
    <>
    <div>
      <h1>{printPassword}</h1>
    </div>
      <input ref={passwordRef} type="text" />
      <button onClick={onSubmit}>Submit</button>
      
    </>
  );
}
