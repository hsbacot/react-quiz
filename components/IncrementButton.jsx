import React, { Component } from 'react';

class IncrementButton extends Component {

  constructor(props) {
    super(props);
  }

  //ES7 property initializer.  In ES6 we would put this outside of the class.
  static propTypes = {
    componentId: React.PropTypes.string.isRequired,
    currentValue: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='col-md-6 text-center'>
        <h1>{this.props.currentValue}</h1>
        <h2
          onClick={this.props.increment.bind(
              this, this.props.componentId
          )}>
          Increment
        </h2>
      </div>
    );
  }
}

export default IncrementButton;
