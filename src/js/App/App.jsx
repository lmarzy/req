import React, { Component } from 'react';
import { Header, Footer } from 'components';
import helpers from '../helpers';

import '../../css/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: 'REQ',
      tagLine: 'Crafting the web',
      year: helpers(),
    };
  }

  render() {
    const { siteName, tagLine, year } = this.state;
    return (
      <div>
        <Header siteName={siteName} tagLine={tagLine} />
        <main>
          <section>
            <h2>About</h2>
          </section>
        </main>
        <Footer year={year} />
      </div>
    );
  }
}

export default App;
