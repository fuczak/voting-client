import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Vote extends React.Component {
  mixins: [PureRenderMixin]

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label voted">Voted</div> :
              null}
          </button>
        )}
      </div>
    );
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
}
