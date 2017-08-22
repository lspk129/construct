import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
  position: relative;
  line-height: 0px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Image = styled.img`
  margin: 0;
`;

const Overlay = styled.div`
  display: grid;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.8);
  overflow: hidden;
  width: 100%;
  ${({ show }) => `height: ${show ? '100%' : '20%'}`};
  transition: .5s ease;
`;

const Text = styled.p`
  color: #fff;
  padding-top: 25px;
  ${({ title }) => title && `
    justify-self: center;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  `};
  ${({ text }) => text && `
    justify-self: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding: 20px;
  `};
`;

const MoreInfoLink = styled.span`
  cursor: pointer;
  ${({ color }) => color && `
    color: #ffc527;
  `};
`

class ServiceCard extends Component {
  state = { showOverlay: false };

  handleMouseEnter = () => this.setState({ showOverlay: true });
  handleMouseLeave = () => this.setState({ showOverlay: false });

  render() {
    return (
      <Section onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Image src={this.props.url} />
        <Overlay show={this.state.showOverlay}>
          <Text title>{this.props.serviceTitle}</Text>
          <Text text>
            {this.props.serviceText}
            <br />
            <br />
            <MoreInfoLink>Daugiau info <MoreInfoLink color>>>></MoreInfoLink></MoreInfoLink>
          </Text>
          
        </Overlay>
      </Section>
    );
  }
}

export default ServiceCard;

ServiceCard.propTypes = {
  url: PropTypes.string.isRequired,
  serviceTitle: PropTypes.string.isRequired,
  serviceText: PropTypes.string.isRequired,
};
