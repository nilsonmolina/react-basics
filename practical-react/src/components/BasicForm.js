import React from 'react';

export default class BasicForm extends React.Component {
  state = {
    name: 'Nilson',
    aboutMe: 'I like pizza, videogames, and hiking.',
    rememberMe: false,
    title: '',
  };

  handleInputText = (e) => this.setState({ name: e.target.value });
  handleTextarea = (e) => this.setState({ aboutMe: e.target.value });
  handleCheckbox = (e) => this.setState({ rememberMe: e.target.checked });
  handleSelect = (e) => this.setState({ title: e.target.value });
  handleSubmit = () => { console.log(this.state); };

  render() {
    return (
      <section className="MyForm">
        <h2>Form</h2>
        <input type="text" value={this.state.name} onChange={this.handleInputText} />
        <input type="text" value={this.state.name} disabled />
        <br />

        <textarea value={this.state.aboutMe} onChange={this.handleTextarea} />
        <br />

        <input type="checkbox" checked={this.state.rememberMe} onChange={this.handleCheckbox} />
        <br />

        <select value={this.state.title} onChange={this.handleSelect}>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Ms.">Ms.</option>
          <option value="Non-Binary">Non-Binary</option>
          <option value="Attack Helicopter">Attack Helicopter</option>
        </select>
        <br />

        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </section>
    );
  };
}