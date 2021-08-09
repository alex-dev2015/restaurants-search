import React, { useState } from "react"; 
import { useSelector } from "react-redux";
import Slider from "react-slick";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
import { Card, RestaurantCard, Map, Modal, Loader, Skeleton } from "../../components";

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Search , Carousel , Logo, Wrapper,  CarouselTitle, ModalTitle, ModalContent} from './styles';

const Home = () => {

  const [inputValue, setImputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null); 
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handlekeyPress(e){
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId){
    setPlaceId(placeId);
    setModalOpened(true);
  }
  
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
            onKeyPress={handlekeyPress}
          />
        </TextField>

        {restaurants.length > 0 ? (
          <>
            <CarouselTitle>Titulo</CarouselTitle>
        <Carousel {...settings} >
          {restaurants.map((restaurant) => 
            <Card 
                  key={restaurant.place_id}
                  photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                  title={restaurant.name}
            />)
          }
                 
        </Carousel>
          </>  
        ) : (
          <Loader />
        )}

        
      </Search>
       { restaurants.map((restaurant) => (
         <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant} />
       )) }
    </Container>
    <Map query={query} placeId={placeId} />
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
      {restaurantSelected ? (
        <>
          <ModalTitle>{restaurantSelected?.name}</ModalTitle>
          <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
          <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
          <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora': 'Fechado'}</ModalContent>
        </>
      ): (
        <>
          <Skeleton width="10px" height="10px" />
          <Skeleton width="10px" height="10px" />
          <Skeleton width="10px" height="10px" />
          <Skeleton width="10px" height="10px" />
        </>
      )} 
        
    </Modal>
  </Wrapper>  
    );
};

export default Home;