
import React from "react";
import Headline from "../components/Headline";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
          <section className="about">
      <h2>About Me</h2>
      <p>Hi, I'm Aditya Vishwakarma, a passionate Mobile App Developer</p>
    </section>
      <section className="headline-section">
        <Headline />
      </section>
      <section className="summary-section">
        <Summary />
      </section>
      <section className="projects-section">
        <Projects />
      </section>
      <section className="experience-section">
        <Experience />
      </section>
      <Footer />
    </div>
  );
};

export default About;
