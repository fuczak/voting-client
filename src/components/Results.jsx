import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.getPair = this.getPair.bind(this);
    this.getVotes = this.getVotes.bind(this);
  }

  mixins: [PureRenderMixin]

  render() {
    return (
      <div className="results">
        {this.getPair().map((entry) => {
          return (<div key={entry} className="entry">
            <h1>{entry}</h1>
            <div className="voteCount">
              {this.getVotes(entry)}
            </div>
          </div>);
        })}
      </div>
    );
  }

  getPair() {
    return this.props.pair || [];
  }

  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
}
