import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ThumbnailBtn } from './Projects.style';
import { Container } from 'theme/grid';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<Container>
				<Zoomy
				  imageUrl={require('assets/monkeyIgnores.jpeg')}
				  renderThumbnail={({ showImage }) => 
				  	<ThumbnailBtn onClick={showImage}>
				  		<img src={require('assets/monkeyIgnoresThumb.jpg')} alt="monkey didn't get joke" />
				  	</ThumbnailBtn>
					}
				  scale={[1.1, 1.1]}
				  imageProps={{
				    style: {
				      width: '100vw',
				      height: 'auto'
				    }
				  }}
				/>
			</Container>
		)
	}
}

export default Projects;