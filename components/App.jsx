require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {
	render() {
		return (
			<div>
				<h1>React Quiz</h1>
				<p>Begin Here</p>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
