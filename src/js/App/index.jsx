import React, { Component } from 'react';
import { Header, Footer } from 'components';
import helpers from '../helpers';

import '../../css/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: 'REQ',
      year: helpers(),
    };
  }

  render() {
    return (
      <div>
        <Header siteName={this.state.siteName} />
        <main>
          <section>
            <h2>About</h2>
          </section>
        </main>
        <Footer year={this.state.year} />
      </div>
    );
  }
}

export default App;
