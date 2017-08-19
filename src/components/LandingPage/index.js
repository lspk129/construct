import React from 'react';
import styled from 'styled-components';
import buildingsImage from '../../images/fun-fact-bg.jpg';


const BackgroundImage = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${buildingsImage});  
background-size: cover;
background-repeat: no-repeat;
display: grid;
`;

const Title = styled.h1`
padding-top: 200px;
font-weight: bold;
color: #fff;
display: grid;
justify-items: center;
align-items: center;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  margin: 10px;
  text-transform: uppercase;
  outline: none;
  font-family: roboto;
  font-weight: bold;
  ${({ info }) => info && `
    background-color: #ffc527;
    border: 2px solid #ffc527;
  `}
  ${({ contact }) => contact && `
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  `}
  &:hover {
    background-color: #121d25;
    color: #ffc527;
    border: 2px solid #ffc527;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const LandingPage = () => (
  <BackgroundImage>
    <Title>
      Pastatų projektavimas.<br />
      Konsultacijos.<br />
      Individualūs sprendimai.
    </Title>
    <Section>
      <Button info>Daugiau info</Button>
      <Button contact>Susisiekite su mumis</Button>
    </Section>
  </BackgroundImage>
);

export default LandingPage;
