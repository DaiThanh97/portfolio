import React, { useEffect, useRef } from "react";
import { greetings } from "../../portfolio";
import Particles from 'react-particles-js';
import { particleConfig } from '../../configs/particles';
import { init } from 'ityped';
import { Fade } from 'react-reveal';
import {
  Container,
} from "reactstrap";
import './style.css';


const Greetings = () => {
  const textRef = useRef();

  useEffect(() => {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
  });

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["Software Engineer", "Backend Developer", "Freelancer"]
    })
  }, []);

  return (
    <Fade top duration={1000} distance="40px">
      <main id="greetings" ref="main">
        <div className="position-relative">
          <section className="section-shaped">
            <div className="intro-item">
              <img className="intro-img" src="bg.jpg" alt="" />
              <div className="intro-holder">
                <Particles params={particleConfig}></Particles>
                <Container className="intro-content text-center">
                  <div className="intro-name">
                    <span className="text-white">
                      {greetings.title}
                    </span>
                    <span className="intro-name__color">{`<Thành/>`}</span>
                  </div>
                  <div className="mt-3 mb-5">
                    <p className="mb-1 text-white intro-tagline">
                      {greetings.tagline}
                    </p>
                    <span className="text-white intro-specialized">
                      {greetings.specialize} <span className="role" ref={textRef}></span>
                    </span>
                  </div>
                </Container>
              </div>
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </main>
    </Fade>
  );
}

export default Greetings;
