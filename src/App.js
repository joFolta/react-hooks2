import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { text: "", checked: false };
  }

  render() {
    const { text, checked } = this.state;
    return (
      <section>
        <input
          type="text"
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
        ></input>
        <input
          type="checkbox"
          checked={checked}
          onChange={e => this.setState({ checked: e.target.checked })}
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
}

export default App;
