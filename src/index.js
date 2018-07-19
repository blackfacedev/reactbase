import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';

class App extends Component {
  state = {};

  render() {
    const { posts } = this.state;
    return (
      <div>
test
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
