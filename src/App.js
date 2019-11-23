import React, { useState } from "react";

function App() {
  // we define initial state as ""
  const state = useState(""); // useState hook returns an array. we declare state as the array.
  const text = state[0]; // first entry of array is inital state
  const setText = state[1]; // second entry of array is f(x) to update the state

  const textState = useState(true); // useState hook returns an array. we declare state as the array.
  const checked = textState[0]; // first entry of array is inital state
  const setChecked = textState[1]; // second entry of array is f(x) to update the state
  return (
    <section>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      ></input>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
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
