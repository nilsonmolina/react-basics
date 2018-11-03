import React from 'react';

export default class FetchRandomPeople extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    if (!this.state.loading) return;
    try {
      const resp = await fetch('https://api.randomuser.me/?results=3');
      const data = await resp.json();
      this.setState({ people: data.results, loading: false });
      // console.log(data.results);
    } catch { this.setState({ people: [], loading: false }); }
  };

  render() {
    let error = '';
    if (this.state.loading) error = <div>loading...</div>
    else if (this.state.people.length < 1) error = <div>people not found.</div>;

    return (
      <section className="fetch">
        <h2>Fetching API Data Array</h2>
        { error ? error : this.state.people.map((person) => (
          <div key={person.login.uuid} className="person">
            <img src={person.picture.large} alt="person"/>
            <div><strong>First:</strong> {person.name.first}</div>
            <div><strong>Last:</strong> {person.name.last}</div>
            <div><strong>Age:</strong> {person.dob.age}</div>
            <div><strong>Gender:</strong> {person.gender}</div>
            <div><strong>Phone:</strong> {person.phone}</div>
            <div><strong>Email:</strong> {person.email}</div>
          </div>
        ))}
      </section>
    );
  };
}