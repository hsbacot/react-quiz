require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
require("../styles/main.css")
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NumericDisplayBox from './NumericDisplayBox';
import IncrementButton from './IncrementButton';

class App extends Component {

	//ES7 property initializer
	state = {
		total: 0,
		left: 0,
		right: 0
	};

	constructor() {
     super()
	//We could use ES6 constructor and lexical method binding like so:
	// 	 this.handleIncrement = this.handleIncrement.bind(this);
  }

	//OR we can do this ES7 combine property intialization with fat arrow preservation of context
  handleIncrement = (event) => {
    let currentTargetValue = this.state[event];

    this.setState({
      [event]: currentTargetValue += 1
    }, () => this.updateTotal());
  }

  updateTotal() {
    const { left, right } = this.state;
    this.setState({
      total: left + right
    });
  }

  render() {
    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
					<h2>
						<NumericDisplayBox
							label='Total Value:&nbsp;'
							value={this.state.total} />
					</h2>
        </div>
        <div className='panel-body'>
					<div className='col-md-6 text-center'>
						<IncrementButton
							componentId='left'
							currentValue={this.state.left}
							increment={this.handleIncrement} />
					</div>
					<div className='col-md-6 text-center'>
						<IncrementButton
							componentId='right'
							currentValue={this.state.right}
							increment={this.handleIncrement} />
					</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#myApp"));
