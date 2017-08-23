import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Input, TextArea, Button } from './Form';
import ContactInfo from './Info';

const Section = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 800px) {
    padding: 0 100px;
  }
`;

const TitleSection = styled.div`
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

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
    // TODO: add email sending function
  }

  renderForm = () => (
    <Form onSubmit={this.handleSubmit}>
      <Input
        type="text"
        value={this.state.firstName}
        onChange={this.handleChange}
        name="firstName"
        placeholder="Vardas"
      />

      <Input
        type="text"
        value={this.state.lastName}
        onChange={this.handleChange}
        name="lastName"
        placeholder="Pavardė"
      />

      <Input
        type="email"
        value={this.state.email}
        onChange={this.handleChange}
        name="email"
        placeholder="El. paštas"
      />

      <Input
        type="text"
        value={this.state.phone}
        onChange={this.handleChange}
        name="phone"
        placeholder="Telefono numeris"
      />

      <TextArea
        rows="10"
        cols="50"
        type="text"
        value={this.state.message}
        onChange={this.handleChange}
        name="message"
        placeholder="Rašyti žinutę"
      />
      <Button type="submit">Siųsti</Button>
    </Form>
  );

  render() {
    return (
      <div>
        <TitleSection text>
          <Subtitle>Kontaktai</Subtitle>
          <Title>Susisiekite su mumis</Title>
          <ColorBar />
          <Text>&emsp;Atsiųskite mums žinutę jums rūpimu klausimu, užpildę žemiau esančią formą, ir mes netrukus su jumis susisieksime.</Text>
        </TitleSection>

        <Section>
          <ContactInfo />
          {this.renderForm()}
        </Section>
      </div>
    );
  }
}

export default Contact;
