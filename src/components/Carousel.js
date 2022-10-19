import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SliderImg1 from '../images/SliderImg1.jpg';
import SliderImg2 from '../images/SliderImg2.jpg';
import SliderImg3 from '../images/SliderImg3.jpg';
import SliderImg4 from '../images/SliderImg4.jpg';
import SliderImg5 from '../images/SliderImg5.jpg';
import SliderImg6 from '../images/SliderImg6.jpg';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {

    return(
      <>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img alt="" src={SliderImg1} />
                </div>
                <div>
                <img alt="" src={SliderImg2} />
                </div>
                <div>
                <img alt="" src={SliderImg3} />
                </div>
                <div>
                <img alt="" src={SliderImg4} />
                </div>
                <div>
                <img alt="" src={SliderImg5} />
                </div>
                <div>
                <img alt="" src={SliderImg6} />
                </div>
            </Carousel>
      </>
    )
  }
  


export default DemoCarousel;
