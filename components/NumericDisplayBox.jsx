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
      <div className='text-center'>
        <span>{this.props.label}</span>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default NumericDisplayBox;
