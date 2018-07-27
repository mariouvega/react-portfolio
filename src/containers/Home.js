import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';


const Image = styled.img`
	width: 100%;
`

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 0,
		}
	}

	increment() {
		this.setState({
			data: this.state.data + 1
		});
	}

  render() {
    return (
      <Container>
	      <h1>Hello!!!!!!!!!!!!!!!!!!!!</h1>
	      <p>{this.state.data}</p>
	      <button onClick={this.increment.bind(this)}>+</button>
        <Image src={require('../assets/VegaMarioCopy.jpg')} alt="Mario Vega" />
        <p>
        	Lo-fi microdosing pickled umami brunch. Man braid taiyaki photo booth, DIY gastropub trust fund brooklyn chambray twee VHS. Lomo cornhole raclette, venmo chia neutra narwhal street art twee poke. Semiotics street art selfies meditation cray migas.
        </p>
      </Container>
    );
  }
}

export default Home;
