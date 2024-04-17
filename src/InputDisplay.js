import React, { useState } from 'react'

export default function InputDisplay() {
    const [text, setText] = useState();
    const handleText = (e) => {
        setText(e.target.value);
    }
  return (
    <div>
      <input type="text" onChange={handleText}/>
      <p>
        <strong>You Have Entered: </strong>
        <span>{text}</span>
      </p>
    </div>
  );
}
