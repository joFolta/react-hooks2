import React, { useState } from "react";

function App() {
  // state as {object} inside useState hook
  // but problem... setState overwrites obj's other properties (need to merge the partialState with prevState as done automagically with Class states)
  const [state, setState] = useState({ text: "", checked: false });

  const handleTextChange = e => setState({ text: e.target.value });
  const handleCheckboxToggle = e =>
    setState(prevState => ({
      checked: !prevState.checked
    }));

  return (
    <section>
      <input type="text" value={state.text} onChange={handleTextChange}></input>
      <input
        type="checkbox"
        checked={state.checked}
        onChange={handleCheckboxToggle}
      ></input>

      <ul>
        <li>
          <label>Mirrored Text: </label>
          {state.text}
        </li>
        <li>
          <label>Checked: </label>
          {state.checked.toString()}
        </li>
      </ul>
    </section>
  );
}

export default App;
