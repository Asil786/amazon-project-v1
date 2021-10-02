import React from 'react';
import image1 from './../assets/1.jpg';
// import image2 from './../assets/2.jpg';
import {Carousel} from 'react-bootstrap';

const CarouselContainer = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselContainer;