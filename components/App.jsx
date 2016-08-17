require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SumBox from './SumBox';
import IncrementButton from './IncrementButton';

class App extends Component {

	//ES7 property initializer
	state = {
		total: 0,
		left: 0,
		right: 0
	};

	//We could use ES6 constructor and lexical method binding like so:
	// constructor() {
  //    super();
	// 	 this.handleIncrement = this.handleIncrement.bind(this);
  // }

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
          <SumBox totalValue={this.state.total} />
        </div>
        <div className='row'>
          <IncrementButton
            componentId='left'
            currentValue={this.state.left}
            increment={this.handleIncrement} />
          <IncrementButton
            componentId='right'
            currentValue={this.state.right}
            increment={this.handleIncrement} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#myApp"));
