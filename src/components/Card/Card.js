import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button.js';

const StyledWrapper = styled.div`
  text-align: center;
  position: relative;
  background: #054371;
  width: 350px;
  height: 180px;
  border-radius: 6px;
  padding: 1rem;
  color: #dbe3e9;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-out;
  }
`;
const StyledP = styled.p`
font-size: 14px;
` 


const Card = ({ title, description, link }) => (
  <StyledWrapper>
    <h1>{title}</h1>
    <StyledP>{description}</StyledP>
    <Button link={link} />
  </StyledWrapper>
);
export default Card;
