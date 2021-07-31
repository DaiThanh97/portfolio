import React from 'react';
import { Fade } from 'react-reveal';
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { aboutSection } from "../../portfolio";
import './style.css';

const Skills = () => {
  const initPills = () => {
    return aboutSection.tags.map((tag, index) => {
      return <div className="tag mr-2">#{tag}</div>
    })
  }

  return (
    <Fade left duration={1000} distance="40px">
      <Container id="about" className="text-left my-5 section section-lg">
        <Row>
          <Col lg="7">
            <h1 className="title mb-0">{aboutSection.title}</h1>
            <span className="lead title-tagline">{aboutSection.tagline}</span>
            <p className="description mt-4">
              I'm a Back-End Developer for <a href="https://www.tpptechnology.com/" target="_blank" className="company" rel="noreferrer">TP&P Technology</a> in VietNam. With 4 years experience in building
              web application and helping companies and clients develop
              and optimize their products in systems and websites.
              Learning new technologies and building valuable
              application that helps others with their work. I’m considered
              a team-player because I like to help other and tend to work
              well within the group.
            </p>
            <div className="d-flex">
              {initPills()}
            </div>
          </Col>
          <Col lg="5" className="d-flex justify-content-center">
            <div className="avatar-holder mt-5 mt-lg-0">
              <img src="./self.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Skills;