// Inside Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Intern Software Engineer - Techriigour IT Solutions Private Limited</h3>
        <p><strong>June 2024 – Present</strong> | Hinjewadi</p>
        <ul>
          <li>Learning the entire SDLC of mobile applications.</li>
          <li>Working on frontend and backend technologies.</li>
          <li>Optimizing UI using GetX for state management.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Placement Cell Co-ordinator - Pratibha College of Commerce & Computer Studies</h3>
        <p><strong>July 2021 – July 2024</strong> | Chinchwad</p>
        <ul>
          <li>Organized placement drives and HR coordination.</li>
          <li>Managed documentation of events and placement reports.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
