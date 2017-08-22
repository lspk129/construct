import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
  display: grid;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${props => props.picture});
  box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);
  background-size: cover;
  background-repeat: no-repeat;
  ${({ title }) => title && `
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  `};
`;

const SubSection = styled.div`
  align-self: end;
  padding: 10px;
  @media (min-width: 600px) {
    padding: 30px;
  }
`

const Image = styled.img`
  margin: 0;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
  transition: .3s ease;
  opacity: 0;
  ${({ show }) => show && `
    opacity: 1;
  `};
`;

const Title = styled.h4`
  color: #fff;
  margin: 0;
  font-weight: 500;
  ${({ big }) => big && `
    font-size: 24px;
  `}

`;
const Text = styled.span`
  color: #fff;
  margin: 0;
  ${({ color }) => color && `
    color: #ffc527;
  `}
  ${({ small }) => small && `
    font-size: 14px
  `}
  ${({ moreInfo}) => moreInfo && `
    align-self: center;
    justify-self: center;
    cursor: pointer;
  `}
`;

class WorkCard extends Component {
  state = { showOverlay: false };

  handleMouseEnter = () => this.setState({ showOverlay: true });
  handleMouseLeave = () => this.setState({ showOverlay: false });

  render() {
    return (
      <Section
        title={this.props.title}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        picture={this.props.picture}
      >
        <SubSection>
          <Title {...{big: this.props.title}}>{this.props.projectTitle}</Title>
          <Text small>{this.props.projectDescription}</Text>
        </SubSection>
        <Overlay show={this.state.showOverlay}>
          <Text moreInfo>Daugiau info <Text color>>>></Text></Text>
        </Overlay>
      </Section>
    );
  }
}

WorkCard.propTypes = {
  picture: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};

export default WorkCard;
