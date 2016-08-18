import React, { Component } from 'react';

class NumericDisplayBox extends Component {

  constructor(props) {
    super(props);
  }

  //ES7 property initializer.  In ES6 we would put this outside of the class.
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    label: React.PropTypes.string
  };

  render() {
    return (
      <span className='col-md-12 text-center'>
        <h1>{this.props.label}</h1>
        <h2>{this.props.value}</h2>
      </span>
    );
  }
}

export default NumericDisplayBox;
