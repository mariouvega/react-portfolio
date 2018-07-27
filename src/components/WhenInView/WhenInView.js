import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inView: false,
		}

		this.onEnter = this.onEnter.bind(this)
	}

	onEnter({ previousPosition }) {
		if (previousPosition === Waypoint.below) {
			this.setState({
				inView: true, 
			});
		}
	}

	render() {
		return (
			<div>
				<Waypoint onEnter={this.onEnter}></Waypoint>
				{this.props.children({ inView: this.state.inView })}
			</div>
		);
	}
}

export default WhenInView;