import React, { useEffect, useState } from 'react';
import { greetings } from "../../portfolio";
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import './style.css'
import * as Scroll from 'react-scroll';
import Headroom from "headroom.js";

const menu = [
  {
    name: 'About',
    ref: 'about'
  },
  {
    name: 'Skills',
    ref: 'skills'
  },
  {
    name: 'Experience',
    ref: 'experience'
  },
  {
    name: 'Education',
    ref: 'education'
  },
  {
    name: 'Contact',
    ref: 'contact'
  }
];

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  })


  const generateMenu = () => {
    return menu.map((menu, index) => {
      return <NavItem key={index}>
        <Scroll.Link
          className="nav-link-icon"
          to={menu.ref} smooth={true}
          duration={600}
          offset={menu.offset}
        >
          {menu.name}
        </Scroll.Link>
      </NavItem>
    })
  }

  return (
    <>
      <header id="header" className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <Scroll.Link className="mr-lg-5" to="greetings" smooth="true" duration="600" style={{ cursor: 'pointer' }}>
              <h2 className="text-white" id="nav-title">{greetings.name}</h2>
            </Scroll.Link>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">{greetings.name}</h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                {generateMenu()}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Navigation;