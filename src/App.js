import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import { getRandomTitle, i18n, embraceWithCode } from './utils';

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
          <h2>{i18n._t('Welcome to React')}</h2>
        </div>
        <p className="App-intro">
          {embraceWithCode(i18n._t('To get started, edit `src/App.js` and save to reload.'))}
        </p>
        <div>
          <button onClick={() => this.addSample()}>{i18n._t('Add new sample block!')}</button>
          <div>{i18n._nt([
            'Now we have %% component on page!',
            'Now we have %% components on page!'
          ], this.state.samples.length)}</div>
        </div>
        <div>
          {this.state.samples}
        </div>
      </div>
    );
  }
}

export default App;
