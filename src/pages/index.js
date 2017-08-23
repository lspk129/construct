import React from 'react';
import LandingPage from '../components/LandingPage';
import Services from '../components/Services';
import Banner from '../components/Banner';
import Work from '../components/Work';
import Contact from '../components/Contact';

const IndexPage = () => (
  <div>
    <LandingPage />
    <Services />
    <Banner />
    <Work />
    <Contact />
  </div>
);

export default IndexPage;
