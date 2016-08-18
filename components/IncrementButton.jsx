import React, { Component } from 'react';

class IncrementButton extends Component {

  constructor(props) {
    super(props);
  }

  //ES7 property initializer.  In ES6 we would put this outside of the class.
  static propTypes = {
    componentId: React.PropTypes.string.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='col-md-6 text-center'>
        <h1
          onClick={this.props.increment.bind(
              this, this.props.componentId
          )}>
          Increment
        </h1>
      </div>
    );
  }
}

export default IncrementButton;
