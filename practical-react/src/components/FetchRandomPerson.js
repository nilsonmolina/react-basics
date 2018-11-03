import React from 'react';

export default class FetchRandomPerson extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    if (!this.state.loading) return;
    try {
      const resp = await fetch('https://api.randomuser.me/');
      const data = await resp.json();
      this.setState({ person: data.results[0], loading: false });
      // console.log(data.results[0]);
    } catch { this.setState({ person: null, loading: false }); }
  };

  render() {
    let error = '';
    if (this.state.loading) error = <div>loading...</div>;
    else if (!this.state.person) error = <div>person not found.</div>;

    return (
      <section className="fetch">
        <h2>Fetching API Data Object</h2>
        { error ? error : (
          <div className="person">
            <img src={this.state.person.picture.large} alt="person"/>
            <div><strong>First:</strong> {this.state.person.name.first}</div>
            <div><strong>Last:</strong> {this.state.person.name.last}</div>
            <div><strong>Age:</strong> {this.state.person.dob.age}</div>
            <div><strong>Gender:</strong> {this.state.person.gender}</div>
            <div><strong>Phone:</strong> {this.state.person.phone}</div>
            <div><strong>Email:</strong> {this.state.person.email}</div>
          </div>
        )}
      </section>
    );
  };
}