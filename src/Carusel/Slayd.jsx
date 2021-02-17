import React, { Component } from 'react';
import Slayder from './Slayder';

class Slayd extends Component {
  render() {
    return (
      <>
      <button>prev</button>
        <Slayder/>
        <button>next</button>
      </>
    );
  }
}

export default Slayd;
