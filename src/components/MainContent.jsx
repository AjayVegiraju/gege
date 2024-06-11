import React from 'react';
import './MainContent.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="home" className="home-section">
        <div className="home-overlay">
          <div className="home-text" data-aos="fade-in">
            <h2>The way the world travels is changing</h2>
            <p>Increasing the operational efficiency of Robotaxi eAV usage to address climate change</p>
          </div>
        </div>
        <div className="cards-overlay">
          <div className="card" data-aos="fade-up">
            <h3>Transportation</h3>
            <p>Helping bring Robotaxi service to the world.</p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>A green play</h3>
            <p>A component in helping to address climate change.</p>
          </div>
          <div className="card" data-aos="fade-up">
            <h3>Our sweet spot</h3>
            <p>Strategically located metro area parking for eAVs.</p>
          </div>
        </div>
      </section>
      <section id="services" className="services-section">
        <div className="service-card" data-aos="fade-right">
          <img src="src/assets/black.jpeg" alt="Service Image 1" />
          <div className="service-text">
            <h2>Building the infrastructure today for a better tomorrow</h2>
            <p>The next generation of Autonomous Vehicle transportation may be a more significant global economic game-changer than the internet or going from horses to cars!</p>
            <a href="#!" className="btn">GET TO KNOW US</a>
          </div>
        </div>
        <div className="service-card" data-aos="fade-left">
          <div className="service-text">
            <h2>A modern day solution</h2>
            <p>Our solutions are designed to meet the needs of modern urban environments, offering flexibility and efficiency.</p>
            <a href="#!" className="btn">LEARN MORE</a>
          </div>
          <img src="src/assets/black.jpeg" alt="Service Image 2" />
        </div>
      </section>
      <section id="contact" className="contact-section" data-aos="fade-in">
        <h2>Contact Us</h2>
        <p>Get in touch with us to learn more about our services.</p>
      </section>
    </main>
  );
}

export default MainContent;
