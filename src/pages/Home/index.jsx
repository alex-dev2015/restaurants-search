import React from "react"; 
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
import { Card, RestaurantCard, Modal } from "../../components";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Search , Carousel , Logo, Wrapper, Map, CarouselTitle} from './styles';
import { useState } from "react";
const Home = () => {

  const [inputValue, setImputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  

 return (
  <Wrapper>
    <Container>
      <Search>
        <Logo src={logo} alt="Logo dos restaurantes" />
        <TextField 
          id="outlined-basic" 
          label="Pesquisar" 
          outlined
          variant="outlined" 
          trailingIcon={<MaterialIcon role="button" icon="search"/>}
        >
          <Input 
            value={inputValue}
            onChange={(e) => setImputValue(e.target.value)}
          />
        </TextField>
        <CarouselTitle>Titulo</CarouselTitle>
        <Carousel {...settings} >
         <Card photo={restaurante} title="Cheiro Verde" />
         <Card photo={restaurante} title="Sal e Brasa"  />
         <Card photo={restaurante} title="Mc Donald" />
         <Card photo={restaurante} title="Bob's" />
         <Card photo={restaurante} title="Cozinha boa" />
         
        </Carousel>
        <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
      </Search>
       <RestaurantCard />
    </Container>
    <Map />
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
  </Wrapper>  
    );
};

export default Home;