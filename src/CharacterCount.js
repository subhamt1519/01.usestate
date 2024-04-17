import React, { useState } from "react";

export default function CharacterCount() {
    const [text, setText] = useState(""); //usestate must have a default value for this to work
    const handleText = (e) => {
        setText(e.target.value);
    }
    console.log(text.length);
  return (
    <div>
      <textarea value={text} onChange={handleText}></textarea>
      <p>
        You have entered <strong> {text.length} </strong> characters.
      </p>
    </div>
  );
}
