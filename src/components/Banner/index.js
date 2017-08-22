import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition, CSSTransition } from 'react-transition-group';
import world from '../../images/europe-map-blue-md.png';

const animationClassName = 'fade';
const enter = 'fade-enter';
const enterActive = 'fade-enter-active';
const exit = 'fade-exit';
const exitActive = 'fade-exit-active';
const enterTimeout = 1000;
const exitTimeout = 1000;
const changeTime = 5000
const showComponentTime = changeTime - exitTimeout;

const Fade = styled(CSSTransition).attrs({
  classNames: animationClassName,
  timeout: enterTimeout,
}) `
  &.${enter} {
    opacity: 0.01;
  }
  &.${enterActive} {
    opacity: 1;
    transition: opacity ${enterTimeout}ms ease-in;
  }
  &.${exit} {
    opacity: 1;
  }
  &.${exit}.${exitActive} {
    opacity: 0.01;
    transition: opacity ${exitTimeout}ms ease-in;
  }
`;

const Section = styled.div`
  ${({ banner }) => banner && `
    height: 200px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-item: center;
    background-color: #121d25;
  `}
  ${({ imageBanner }) => imageBanner && `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 2fr;
    }
  `}
`;

const Text = styled.h2`
  margin: 0;
  color: #fff;
  align-self: center;
`
const Image = styled.img`
  width: 150px;
  margin: 0;
  justify-self: end;
`;

class Banner extends Component {
  constructor(...args) {
    super(...args);
    this.state = { comp: 1, show: false };

    setInterval(() => {
      if (this.state.comp === 1) {
        this.setState({ comp: 2, show: true });
        setTimeout(() => this.setState({ show: false}), showComponentTime)
      } else {
        this.setState({ comp: 1, show: true });
        setTimeout(() => this.setState({ show: false}), showComponentTime)
      }
    }, changeTime);
  }

  renderBannerOne = (props) => (
    <Fade in={props}>
      <Text>Patirtis nuo 2004 m.</Text>
    </Fade>
  )

  renderBannerTwo = (props) => (
    <Fade in={props}>
      <Section imageBanner>
        <Image src={world} alt="" />
        <Text>Tarptautiniai projektai.</Text>
      </Section>
    </Fade>
  )

  render() {
    return (
      <Section banner>
        {this.state.comp === 1
          ? this.renderBannerOne(this.state.show)
          : this.renderBannerTwo(this.state.show)
        }
      </Section>
    )
  }
}

export default Banner;
