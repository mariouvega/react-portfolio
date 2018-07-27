import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';


const Image = styled.img`
	width: 100%;
`

class Home extends Component {
  render() {
    return (
      <Container>
        <Image src={require('../assets/VegaMarioCopy.jpg')} alt="Mario Vega" />
        <p>
        	Lo-fi microdosing pickled umami brunch. Man braid taiyaki photo booth, DIY gastropub trust fund brooklyn chambray twee VHS. Lomo cornhole raclette, venmo chia neutra narwhal street art twee poke. Semiotics street art selfies meditation cray migas.
        </p>
      </Container>
    );
  }
}

export default Home;
