import React from "react";
import { Carousel } from "react-bootstrap";

const Slideshow = () => {
  return (
    <div id="slideshow">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../pics/8thGrd-new.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Media Ballers</h3>
            <p>CES Philly Fall Classic Champions - 8th Grade Boys</p>
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../pics/CoachesBack.jpeg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            { <h3>Coahing at Competitive Edge</h3> }
          </Carousel.Caption>
        </Carousel.Item>
        {/*
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../pics/slide3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Slideshow;
