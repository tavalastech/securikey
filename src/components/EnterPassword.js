import React, { useState, useRef,  } from "react";
import { logPassword } from "../functions/backend";

export default function EnterPassword() {

  // React Hooks
  const passwordRef = useRef();
  const [ printPassword, setPrintPassword ] = useState("");
  const [isShown, setIsShown] = useState(false);



  // On Submit Function
  function onSubmit(e) {
    const password = passwordRef.current.value;
    if (password === "") return;
    logPassword(password);
    setPrintPassword(password);
    setIsShown((current) => !current);
  }

  return (
    <>
      <input ref={passwordRef} type="text" />
      <button onClick={onSubmit}>Submit</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h1>This is the input: {printPassword}</h1>
        </div>
      )}
    </>
  );
}
