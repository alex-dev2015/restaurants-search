import { props } from 'bluebird';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
 min-width: 80px;
  height: 80px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
`;

const  ImageCard = ({photo, title}) =>  (
<Card photo={photo}>
  <Title>{title}</Title>
</Card> );

export default ImageCard;