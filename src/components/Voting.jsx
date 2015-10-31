import React from 'react';

export default class Voting extends React.Component {
  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>
    );
  }

  getPair() {
    return this.props.pair || [];
  }
}
