import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ThumbnailBtn, ProjectDiv, Image } from './Projects.style';
import { Container, ProjectContainer } from 'theme/grid';
import { Link } from 'theme/types'

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<Container>
			<ProjectContainer>
					<ProjectDiv>
						<h1>Name of <Link href="#">Project</Link></h1>
							<Zoomy
							  imageUrl={require('assets/monkeyIgnores.jpeg')}
							  renderThumbnail={({ showImage }) => 
							  	<ThumbnailBtn onClick={showImage}>
							  		<Image src={require('assets/monkeyIgnoresThumb.jpg')} alt="monkey didn't get joke" />
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
					</ProjectDiv>
					<ProjectDiv>
					<h1>Name of <Link href="#">Project</Link></h1>
						<Zoomy
						  imageUrl={require('assets/monkeyIgnores.jpeg')}
						  renderThumbnail={({ showImage }) => 
						  	<ThumbnailBtn onClick={showImage}>
						  		<Image src={require('assets/monkeyIgnoresThumb.jpg')} alt="monkey didn't get joke" />
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
					</ProjectDiv>
			</ProjectContainer>
				<ProjectContainer>
					<ProjectDiv>
					<h1>Name of <Link href="#">Project</Link></h1>
						<Zoomy
						  imageUrl={require('assets/monkeyIgnores.jpeg')}
						  renderThumbnail={({ showImage }) => 
						  	<ThumbnailBtn onClick={showImage}>
						  		<Image src={require('assets/monkeyIgnoresThumb.jpg')} alt="monkey didn't get joke" />
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
					</ProjectDiv>
					<ProjectDiv>
					<h1>Name of <Link href="#">Project</Link></h1>
						<Zoomy
						  imageUrl={require('assets/monkeyIgnores.jpeg')}
						  renderThumbnail={({ showImage }) => 
						  	<ThumbnailBtn onClick={showImage}>
						  		<Image src={require('assets/monkeyIgnoresThumb.jpg')} alt="monkey didn't get joke" />
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
					</ProjectDiv>
				</ProjectContainer>
			</Container>
		)
	}
}

export default Projects;