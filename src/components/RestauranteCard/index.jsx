import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';
import { Restaurant , RestaurantInfo, Title, Address, RestaurantPhoto} from './styles';

const RestaurantCard = () => (
  <>
    <Restaurant>
      <RestaurantInfo>
        <Title>Sal e Brasa </Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>Av. Holandeses - Calhau</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
    </Restaurant> 

    <Restaurant>
      <RestaurantInfo>
        <Title>Cheiro Verde </Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>Rua do Babuzal - Cohama</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
    </Restaurant> 
  </>

);

export default RestaurantCard;