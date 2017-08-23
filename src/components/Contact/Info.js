import React from 'react';
import styled from 'styled-components';
import emailIcon from '../../../public/static/ic_email_black_24px.svg';
import phoneIcon from '../../../public/static/ic_phone_black_24px.svg';
import homeSVG from '../../../public/static/ic_home_black_24px.svg';

const Icon = styled.img`
  margin: 0;
  width: 18px;
  fill: ; 
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
`;

const SectionContact = styled.div`
  display: grid;
  justify-self: center;
  grid-gap: 10px;
  padding: 20px;
  margin: 0 0 auto;
`;

const InfoText = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
`;

const ContactInfo = () => (
  <SectionContact>
    <SectionRow>
      <Icon src={homeSVG} alt="" />
      <InfoText>Kalvarijų g., Vilnius</InfoText>
    </SectionRow>
    <SectionRow>
      <Icon src={phoneIcon} alt="" />
      <InfoText>+370000000</InfoText>
    </SectionRow>
    <SectionRow>
      <Icon src={emailIcon} alt="" />
      <InfoText>info@konstruktyvas.lt</InfoText>
    </SectionRow>
  </SectionContact>
);

export default ContactInfo;
