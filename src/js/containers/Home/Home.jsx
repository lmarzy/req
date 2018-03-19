import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: 'Req',
    };
  }

  render() {
    return (
      <h2>{this.state.siteName}</h2>
    );
  }
}

export default Home;
