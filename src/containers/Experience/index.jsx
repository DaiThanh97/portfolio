import React from 'react';
import { experience } from "../../portfolio";
import {
  Container,
} from "reactstrap";
import { Fade } from 'react-reveal';
import ExperienceCard from "../../components/ExperienceCard/index";
import Slider from "react-slick";
import './style.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const Experience = () => {
  return (
    <section id="experience" className="section section-lg my-5">
      <Container>
        <Fade left duration={1000} distance="40px">
          <h1 className="title text-center">Experience</h1>
          <p className="tagline text-center">All the companies that I worked and currently working for.</p>
          <Slider {...settings}>
            {
              experience.map((data, i) => {
                return <ExperienceCard key={i} data={data} />
              })
            }
          </Slider>
        </Fade>
      </Container>
    </section>
  );
}

export default Experience;