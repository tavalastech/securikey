import React, { useState, useRef,  } from "react";
import { logPasswordUpper } from "../functions/backend";

export default function EnterPassword() {

  // React Hooks
  const passwordRef = useRef();
  const [ printPassword, setPrintPassword ] = useState("");


  // On Submit Function
  function onSubmit(e) {
    const password = passwordRef.current.value;
    if (password === "") return;
    logPasswordUpper(password);
    setPrintPassword(password);
  }

  return (
    <>
      <input ref={passwordRef} type="text" />
      <button onClick={onSubmit}>Submit</button>
      <h1>{printPassword}</h1>
    </>
  );
}
