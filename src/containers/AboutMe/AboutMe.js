import React, { Component } from 'react';
import { Container } from 'theme/grid';
import { Title } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2 } from 'theme/types';


class AboutMe extends Component {
	render() {
		return (
				<Container>
					<Title>About Me!!</Title>
					<H2 align="right">Talk about you!</H2>
					<p>Talk about yuor hobbies, passions, what got you into programming. Dont be boring. Engage with your audience. What are your goals where do you dream of working one day.idk.anything!!</p>
					<ReactPlayer controls url={require('assets/mario_monkey_loling.mp4')} /> 
				</Container>
			)
	}
}

export default AboutMe;