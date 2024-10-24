import React from 'react';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <div>
      <section className="headline-section">
        <Headline />
      </section>
      <section className="projects-section">
        <Projects/>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
