import React, { Component } from 'react';

export default class SumBox extends Component {

  static propTypes = {
    totalValue: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <div className='col-md-12 text-center'>
        <h1>Total:</h1>
        <h1>{this.props.totalValue}</h1>
      </div>
    );
  }
}
