import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// mainCarousel Images
import car from '../assets /car.png';
import car2 from '../assets /car2.png';
import car3 from '../assets /car3.png';
import car4 from '../assets /car4.png';

class mainCarousel extends Component {
  render() {
    return (
      <div className="mainCarousel">
        <Carousel autoPlay>
          <div>
            <img className='img1' src={car} alt="Pic_Image" />
          </div>
          <div>
            <img className='img1' src={car2} alt="Pic_Image" />
          </div>
          <div>
            <img className='img1' src={car3} alt="Pic_Image" />
          </div>
          <div>
            <img className='img1' src={car4} alt="Pic_Image" />
          </div>
        </Carousel>
      </div>
    );
  }
};

export default mainCarousel;
