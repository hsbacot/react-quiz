import React, { Component } from 'react';
import NumericDisplayBox from './NumericDisplayBox';

class IncrementButton extends Component {

  constructor(props) {
    super(props);
  }

  //ES7 property initializer.  In ES6 we would put this outside of the class.
  static propTypes = {
    componentId: React.PropTypes.string.isRequired,
    currentValue: React.PropTypes.string.isRequired,
    increment: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className='col-md-12'>
        <button className="btn btn-primary btn-block"
          onClick={this.props.increment.bind(
              this, this.props.componentId
          )}>
          <h2><span className='label'>
            Increment
          </span>
          <span className='badge'>
            <NumericDisplayBox
              value={this.props.currentValue} />
          </span>
          </h2>
        </button>
      </div>
    );
  }
}

export default IncrementButton;
