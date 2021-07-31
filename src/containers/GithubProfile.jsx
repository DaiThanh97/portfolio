import SocialLinks from './../components/SocialLinks';
import { greetings } from '../portfolio';
import React from 'react';
import { Container } from 'reactstrap';

const GithubProfile = () => {
  return (
    <section id="contact" className="section section-lg mt-5 pb-0">
      <h1 className="text-center" style={{ fontWeight: '700' }}>Contact</h1>
      <p className="text-center" style={{ fontWeight: '500' }}>Reach out to me!</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1696.2308911319494!2d106.67104538553463!3d10.773740890217265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edc7bd9fd65%3A0x7500396cc3a60d04!2sDistrict%2010%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1627647969692!5m2!1sen!2s"
        style={{ border: 0, width: '100%', height: '500px' }}
        allowFullScreen
        loading="lazy"
        title="location"
      >
      </iframe>
      <Container className="section section-lg" style={{ fontSize: '1.3rem' }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <span className="ml-2">District 10, VietNam</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2">
            <i class="fas fa-phone-alt"></i>
          </div>
          <span className="ml-2">+84909.138.223</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-2">
            <i class="fas fa-envelope"></i>
          </div>
          <span className="ml-2">tionguyen97@gmail.com</span>
        </div>
      </Container>
      <div style={{
        background: '#172b4d',
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 0px'
      }}>
        <div className="text-center">
          <h2 className="text-white" id="nav-title">{greetings.name}</h2>
          <div className="my-4">
            <SocialLinks />
          </div>
          <p className="text-white">© 2021 THANHND - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </section>
  );
}

export default GithubProfile;