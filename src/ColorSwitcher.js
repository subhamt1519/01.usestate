import React, { useState } from "react";

export default function ColorSwitcher() {
  const colors = ["red", "green", "blue", "purple", "pink", "skyblue", "wheat"];
  const [selectValue, setSelectValue] = useState("");
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div>
      <select value={selectValue} onChange={handleSelect}>
        <option value={""}>Select Background Color</option>
        {colors.map((color, i) => (
          <option key={i} value={color}>
            {color}
          </option>
        ))}
      </select>
      <br />
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: selectValue,
        }}
      ></div>
    </div>
  );
}
