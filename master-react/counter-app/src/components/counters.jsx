import React from 'react';
import Counter from './counter';

export default class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: 13 },
    ],
  };

  render() {
    return (
      <div>
        { this.state.counters.map((c) => <Counter key={c.id} value={c.value} />) }
      </div>
    );
  };
}
