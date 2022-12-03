import React, { Component } from "react";
import "./App.css";
import SwichButton from "./SwichButton.js";
import ClearButton from "./ClearButton.js";

class App extends Component {
	state = {
		time: 0,
		active: false,
	};

	handleSwichButton = () => {
		if (this.state.active) {
			clearInterval(this.idInterval);
		} else {
			this.idInterval = setInterval(() => {
				this.addSecond();
			}, 1000);
		}

		this.setState({
			active: !this.state.active,
		});
	};

	addSecond = () => {
		this.setState({
			time: this.state.time + 1,
		});
	};

	handleClearButton = () => {
		clearInterval(this.idInterval);

		this.setState({
			time: 0,
			active: false,
		});
	};

	render() {
		return (
			<>
				<p>{this.state.time}</p>
				<SwichButton
					click={this.handleSwichButton}
					active={this.state.active}
				/>
				<ClearButton click={this.handleClearButton} />
			</>
		);
	}
}

export default App;
