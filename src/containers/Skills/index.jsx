import React, { Fragment } from 'react';
import { Fade } from 'react-reveal';
import DisplayLottie from '../../components/DisplayLottie'
import webdev from '../../assets/lottie/programming.json';
import './style.css'
import {
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../../portfolio";

const Skills = () => {
  const generateTechs = () => {
    return skillsSection.techStacks.map((tech, index) => {
      const { name, techs } = tech;
      return <Fragment key={index}>
        <li className="skill">{name}</li>
        <li className="skill-list">
          {
            techs.map((skill, index) => {
              return <Fragment key={index}>
                <div className="icon icon-lg icon-shape shadow rounded-circle mb-3" id={skill.skillName}>
                  <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target={skill.skillName}
                >
                  {skill.skillName}
                </UncontrolledTooltip>
              </Fragment>
            })
          }
        </li>
      </Fragment>
    })
  }

  return (
    <Fade left duration={1000} distance="40px">
      <Container id="skills" className="my-5 section">
        <h1 className="title text-center">{skillsSection.title}</h1>
        <p className="tagline text-center">{skillsSection.subTitle}</p>
        <Row className="mt-6">
          <Col lg="5">
            <DisplayLottie animationData={webdev} />
            <div className="mt-5">
              {
                skillsSection.skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>
                })
              }
            </div>
          </Col>
          <Col lg="1"></Col>
          <Col lg="6">
            <ul>
              {generateTechs()}
            </ul>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default Skills;