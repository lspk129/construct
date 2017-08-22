import React from 'react';
import styled from 'styled-components';
import WorkCard from './WorkCard';
import daugiabutisSvedija from '../../images/daugiabutis-svedija.jpg';
import namaiSantariskese from '../../images/namai-santariskese.jpg';
import prekybosCentrasPupa from '../../images/pupos-ppc.jpg';
import daugiabutisPilaite from '../../images/daugiabutis-priegliaus.jpg';
import administracinisPasilaiciai from '../../images/administracines-pavilioniu.jpg';

const Section = styled.div`
  ${({ text }) => text && `
    padding: 20px;
    @media (min-width: 600px) {
      padding: 20px 40px;
    }
    @media (min-width: 800px) {
      padding: 20px 100px;
    }
  `}
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
  line-height: 26px;
`;

const ImageSection = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 200px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
    padding: 0 100px;
  }
`;

const Work = () => (
  <Section>
    <Section text>
      <Subtitle>Projektai</Subtitle>
      <Title>Atlikti projektai</Title>
      <ColorBar />
      <Text>&emsp;Žemiau pateikiama tik maža dalis projektų, kuriuos mes atlikome arba prisidėjome prie jų įgyvendinimo.</Text>
    </Section>
    <ImageSection>
      <WorkCard
        title
        picture={daugiabutisSvedija}
        projectTitle={'Daugiabutis gyvenamasis namas'}
        projectDescription={'Goteburgs, Švedija'}
      />
      <WorkCard
        picture={namaiSantariskese}
        projectTitle={'Gyvenamieji namai'}
        projectDescription={'Santariškės, Vilnius'}
      />
      <WorkCard
        picture={prekybosCentrasPupa}
        projectTitle={'Prekybos centras "Pupa"'}
        projectDescription={'Pilaitė, Vilnius'}
      />
      <WorkCard
        picture={daugiabutisPilaite}
        projectTitle={'Daugiabutis namas'}
        projectDescription={'Pilaitė, Vilnius'}
      />
      <WorkCard
        picture={administracinisPasilaiciai}
        projectTitle={'Administracinės patalpos'}
        projectDescription={'Pašilaičiai, Vilnius'}
      />
    </ImageSection>
  </Section>
);

export default Work;
