import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import { getRandomTitle } from './utils';

class App extends Component {
  constructor() {
    super();
    this.state = {samples: []};
  }

  addSample() {
    this.setState({
      samples: this.state.samples.concat([
        <Sample key={this.state.samples.length} addTitle={getRandomTitle()} />
      ])
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => this.addSample()}>Add new sample block!</button>
          <div>Now we have {this.state.samples.length} components on page!</div>
        </div>
        <div>
          {this.state.samples}
        </div>
      </div>
    );
  }
}

export default App;
