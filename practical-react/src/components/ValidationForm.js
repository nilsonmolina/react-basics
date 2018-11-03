import React from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: '',
};

export default class ValidationForm extends React.Component {
  state = initialState;

  validate = () => {
    let nameError, emailError, passwordError = '';

    if (!this.state.name) nameError = 'name is required';
    if (!this.state.email.includes('@')) emailError = 'invalid email';
    if (this.state.password.length < 6) passwordError = 'password must be at least 6 chars.';

    if (nameError || emailError || passwordError) { 
      this.setState({ nameError, emailError, passwordError });
      return false;
    }
    
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }); };

  render() {
    return (
      <section className="myForm">
      <h2>Form Validation</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name"
            value={this.state.name} onChange={this.handleChange} 
          />
          <div className="error">{this.state.nameError}</div>

          <input type="text" name="email" placeholder="email"
            value={this.state.email} onChange={this.handleChange}
          />
          <div className="error">{this.state.emailError}</div>

          <input type="password" name="password" placeholder="password"
            value={this.state.password} onChange={this.handleChange} 
          />
          <div className="error">{this.state.passwordError}</div>

          <button>Submit</button>
        </form>
      </section>
    );
  };
}