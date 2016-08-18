require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
// require("../styles/main.css")
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
      <div className='container'>
        <div className='row'>
          <NumericDisplayBox
						label='Total Value'
						value={this.state.total} />
        </div>
        <div className='row'>
					<NumericDisplayBox
						value={this.state.left} />
          <IncrementButton
            componentId='left'
            increment={this.handleIncrement} />
					<NumericDisplayBox
						value={this.state.right} />
					<IncrementButton
            componentId='right'
            increment={this.handleIncrement} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#myApp"));
