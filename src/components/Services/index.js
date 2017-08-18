import React from 'react';
import styled from 'styled-components';
import ServiceCard from './ServiceCard';
import imageMaitenance from '../../images/pexels-photo-392031.jpeg';
import imageConsult from '../../images/pexels-photo-416405.jpeg';
import imageShipyard from '../../images/shipyard-2458150_1280.jpg';

const Section = styled.div`
  ${({ card }) => card && `
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    display: grid;
    justify-content: center;
    grid-gap: 30px;
  `}
  ${({ padding }) => padding && 'padding: 100px;'}
`;

const Subtitle = styled.span`
  font-size: 16px;
  color: #737a7f;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const ColorBar = styled.div`
  width: 50px;
  height: 6px;
  background-color: #ffc527;
`;

const Text = styled.p`
  margin: 30px 0 30px;
  color: #5b6166;
  line-height: 20px;
`;

const Services = () => (
  <Section padding>
    <Subtitle>Paslaugos</Subtitle>
    <Title>Mes dirbame jums</Title>
    <ColorBar />
    <Text>Patikėkite pastato projektavimą savo srities profesionalams</Text>
    <Section card>
      <ServiceCard url={imageConsult} />
      <ServiceCard url={imageMaitenance} />
      <ServiceCard url={imageShipyard} />
    </Section>
  </Section>
);

export default Services;
