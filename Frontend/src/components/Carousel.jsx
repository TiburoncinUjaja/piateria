import React from 'react'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import CarouselImg1 from '../img/CarouselImg1.jpg'
import CarouselImg2 from '../img/CarouselImg2.jpg'
import CarouselImg3 from '../img/CarouselImg3.jpg'

const Carousel1 = () => {
    const imgStyle = {
        height: '400px',
        objectFit: 'cover' 
      };
  return (
    <>
    <TECarousel showControls ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem
          itemID={1}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          style={imgStyle}
        >
          <img
            src={CarouselImg1}
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={2}
          className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          style={imgStyle}
        >
          <img
            src={CarouselImg2}
            className="block w-full"
            alt="..." 
          />
        </TECarouselItem>
        <TECarouselItem
          itemID={3}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          style={imgStyle}
        >
          <img
            src={CarouselImg3}
            className="block w-full"
            alt="..."
          />
        </TECarouselItem>
      </div>
    </TECarousel>
  </>
  )
}

export default Carousel1
