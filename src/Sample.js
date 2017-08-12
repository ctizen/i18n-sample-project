import React, { Component } from 'react';
import './Sample.css';

class Sample extends Component {
  render() {
    let addTitle = this.props.addTitle;
    return (
      <div className="Sample">
        <div className="Sample-header">
          <h2>Sample component: {addTitle}</h2>
        </div>
        <p className="Sample-body">
          You can place as many sample components on the page as you wish.
        </p>
      </div>
    );
  }
}

export default Sample;
