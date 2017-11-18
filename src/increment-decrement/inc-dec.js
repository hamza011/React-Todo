import React, { Component } from 'react';
import './inc-dec.css'

class IncrementAndDecrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className='parent-div'>
        <button className="button" onClick={this.IncrementItem}>Click to increment by 1</button>
        <button className="button" onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button className="button" onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2 className="number">{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default IncrementAndDecrement;
