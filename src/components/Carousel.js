import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SliderImg from '../images/SliderImg.png'
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => {
    return(
      <>
                <Carousel>
                <div>
                    <img alt="" src={SliderImg} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                <img alt="" src={SliderImg} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                <img alt="" src={SliderImg} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
      </>
    )
  }
  


export default DemoCarousel;
