import React, { Component } from 'react';
import { Header, Footer } from 'components';
import { Home } from 'containers';

import '../../../css/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: 'Req',
      tagLine: 'Crafting a better web',
    };
  }

  render() {
    const { siteName, tagLine } = this.state;

    return (
      <div>
        <Header siteName={siteName} tagLine={tagLine} />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
