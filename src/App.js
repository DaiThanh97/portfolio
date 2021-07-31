import React from "react";

import Navigation from "./components/Navigation/index";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills/index";
import Experience from "./containers/Experience/index";
import About from './containers/About/index';
import Education from './containers/Education/index';
import GithubProfile from './containers/GithubProfile';

const App = () => {
  return (
    <>
      <Navigation />
      <Greetings />
      <About />
      <Skills />
      <Experience />
      <Education />
      <GithubProfile />
    </>
  );
};

export default App;
