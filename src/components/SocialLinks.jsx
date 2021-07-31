import React from 'react';

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg d-flex justify-content-center">
      <Button
        className="d-flex justify-content-center"
        color="facebook"
        href={socialLinks.facebook}
        target="_blank"
        style={{ width: '50px', height: '50px' }}
      >
        <span className="btn-inner--icon">
          <i className="fa fa-facebook-f fa-2x" />
        </span>
      </Button>
      <Button
        className="d-flex justify-content-center"
        color="github"
        href={socialLinks.github}
        target="_blank"
        style={{ width: '50px', height: '50px' }}
      >
        <span className="btn-inner--icon">
          <i className="fa fa-github fa-2x" />
        </span>
      </Button>
      <Button
        className="d-flex justify-content-center"
        color="twitter"
        href={socialLinks.linkedin}
        target="_blank"
        style={{ width: '50px', height: '50px', background: "#0a66c2", border: 'none' }}
      >
        <i className="fa fa-linkedin fa-2x" />
      </Button>
    </div>
  );
}

export default SocialLinks;