import React, { useState } from "react";

export default function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(true);
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div>
      <button onClick={handleVisibility}>Hide/Show Element</button>
      {isVisible && <p>Tap the button above to see the magic</p>}
    </div>
  );
}
