import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const handleTextChange = e => setText(e.target.value);

  // const handleCheckboxToggle = e => setChecked(!checked);
  // const handleCheckboxToggle = e => setChecked(e.target.checked);
  // OR... takes in function with arg as prevState
  const handleCheckboxToggle = e => setChecked(prevChecked => !prevChecked);

  return (
    <section>
      <input type="text" value={text} onChange={handleTextChange}></input>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxToggle}
      ></input>

      <ul>
        <li>
          <label>Mirrored Text: </label>
          {text}
        </li>
        <li>
          <label>Checked: </label>
          {checked.toString()}
        </li>
      </ul>
    </section>
  );
}

export default App;
