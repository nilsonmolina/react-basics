import React from 'react';

export default class OptimizedForm extends React.Component {
  state = {
    name: 'Nilson',
    aboutMe: 'I like pizza, videogames, and hiking.',
    rememberMe: false,
    title: '',
  };

  handleChange = (e) => {
    const isChecked = e.target.type === 'checkbox';
    this.setState({ [e.target.name]: isChecked ? e.target.checked : e.target.value });
  };
  handleSubmit = (e) => { 
    e.preventDefault();
    console.log(this.state); 
  };


  render() {
    return (
      <section className="MyForm">
        <h2>Alternate Form</h2>
        <form onSubmit={ this.handleSubmit }>
          <input type="text"  name="name"
            value={this.state.name} onChange={this.handleChange}
          />
          <input type="text" disabled value={this.state.name} />
          <br />

          <textarea name="aboutMe"
            value={this.state.aboutMe} onChange={this.handleChange}
          />
          <br />

          <input type="checkbox" name="rememberMe"
            checked={this.state.rememberMe} onChange={this.handleChange}
          />
          <br />

          <select name="title" value={this.state.title} onChange={this.handleChange}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Attack Helicopter">Attack Helicopter</option>
          </select>
          <br />

          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </section>
    );
  };
}