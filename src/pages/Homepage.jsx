import React from "react";
import Headline from "../components/Headline";
import Summary from "../components/Summary";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="profile-container">
          <div className="profile-section">
            <img
              src="/src/assets/profile.jpg"
              alt="Aditya Vishwakarma"
              className="profile-image"
            />
          </div>
          <div className="profile-text">
            <h1>Welcome to My Portfolio</h1>
            <p>This is a showcase of my projects and skills.</p>
          </div>
        </div>

        <div className="resume-section">
          <a
            href="https://drive.google.com/file/d/1xa2sUe3v9137laCwLTv_H_Vgp3T6B_Ln/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>
      </section>

      <section className="headline-section">
        <Headline />
      </section>
      <section className="summary-section">
        <Summary />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
