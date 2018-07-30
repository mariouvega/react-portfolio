import React, { Component, PropTypes } from 'react';
import { Background } from './App.style';

class App extends Component {
  render() {
    return (
      <div>
      <Background/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
