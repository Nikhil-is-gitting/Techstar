import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to FarmConnect</h1>
        <p>Empowering farmers, traders, consumers, and transporters with AI-driven agriculture solutions.</p>
        <button className="cta-button">Get Started</button>
      </section>
      <section className="features">
        <div className="feature-card">
          <h2>Farmers</h2>
          <p>Get crop recommendations, market rates, and loan insights.</p>
        </div>
        <div className="feature-card">
          <h2>Traders</h2>
          <p>Bulk buy produce and connect with transporters.</p>
        </div>
        <div className="feature-card">
          <h2>Consumers</h2>
          <p>Buy fresh produce directly from farmers.</p>
        </div>
        <div className="feature-card">
          <h2>Transporters</h2>
          <p>Facilitate logistics with real-time tracking.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;