import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./Counter";
import InputDisplay from "./InputDisplay";
import CharacterCount from "./CharacterCount";
import ToggleVisibility from "./ToggleVisibility";
import ToDo from "./ToDo";
import ColorSwitcher from "./ColorSwitcher";
import SearchFilter from "./SearchFilter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h2>1. Counter</h2>
    <Counter />
    <hr />
    <h2>2. Display Input</h2>
    <InputDisplay />
    <hr />
    <h2>3. Input Character Count</h2>
    <CharacterCount />
    <hr />
    <h2>4. Toggle Element Visibility</h2>
    <ToggleVisibility />
    <hr />
    <h2>5. Todo List</h2>
    <ToDo />
    <hr />
    <h2>6. Color Switcher</h2>
    <ColorSwitcher />
    <hr />
    <h2>7. Filter Search</h2>
    <SearchFilter />
  </React.StrictMode>
);
