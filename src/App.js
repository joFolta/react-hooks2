import React, { useState } from "react";

function App() {
  // state as {object} inside useState hook
  // but problem... setState overwrites obj's other properties (need to merge the partialState with prevState as done automagically with Class states)
  const [state, setState] = useState({ text: "", checked: false });

  const mergeState = partialState =>
    setState(prevState => ({
      ...prevState,
      ...partialState
    }));

  return (
    <section>
      <input
        type="text"
        value={state.text}
        onChange={e => mergeState({ text: e.target.value })}
      ></input>
      <input
        type="checkbox"
        checked={state.checked}
        onChange={e => mergeState({ checked: !state.checked })}
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
