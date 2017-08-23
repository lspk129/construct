import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: minmax(200px, 600px);
  grid-gap: 10px;
  padding: 20px;
`;

export const Input = styled.input`
  background-color: #e8eef0;
  height: 40px;
  padding: 5px 15px;
  font-size: 14px;
  margin: 5px 0;
  border: 0;
`;

export const TextArea = styled.textarea`
  background-color: #e8eef0;
  height: 40px;
  padding: 5px 15px;
  font-size: 14px;
  margin: 5px 0;
  border: 0;
  height: 120px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 14px;
  padding: 5px 25px;
  text-transform: uppercase;
  outline: none;
  font-weight: bold;
  background-color: #ffc527;
  border: #ffc527;
  &:hover {
    background-color: #121d25;
    color: #fff;
    border: 2px solid #ffc527;
  }
`;
