import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Container } from 'theme/grid';
import { MyImage, RevealP } from './Home.style';


class Home extends Component {
	static propTypes = {}

  render() {
    return (
      <Container>
      	<MyImage>
      		<h1>Mario Vega</h1>
      		<h2>Full Stack Software Engineer</h2>
      	</MyImage>
        {/*<Image src={require('../../assets/VegaMarioCopy.jpg')} alt="Mario Vega" />*/}
        <RevealP>
        	Lo-fi microdosing pickled umami brunch. Man braid taiyaki photo booth, DIY gastropub trust fund brooklyn chambray twee VHS. Lomo cornhole raclette, venmo chia neutra narwhal street art twee poke. Semiotics street art selfies meditation cray migas.
        </RevealP>
      </Container>
    );
  }
}

export default Home;
