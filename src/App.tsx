import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <Logo />
          <span className="company-name">NaturalIntelligence</span>
        </div>
        <div className="navbar-right">
          <button className="meeting-button">Book Free Consultation</button>
          <div className="burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <header className="App-header">
        <div className="trusted-badge">
          <span>✨</span>
          Trusted by 20+ companies
        </div>
        <h1 className="title">
          <span className="title-row">We create growth</span>
          <span className="title-row">for your business</span>
          <span className="title-row">through <span className="highlight">AI Employees</span></span>
        </h1>
        <p className="subtitle">
          Our AI solutions handle what's slowing you down, while you focus on moving forward. 
          Efficiency and freedom you'll feel.
        </p>
        <div className="cta-container">
          <button className="cta-button primary">Get Free Consultation</button>
          <p className="no-obligation">No obligations, just results</p>
        </div>
      </header>

      <Calculator />

      <section className="ai-employees">
        <h2>AI Employees - Ready to Deploy</h2>
        <p>Through NaturalIntelligence's AI employees, you can unburden your team, sustainably reduce process costs, and simultaneously increase your revenue. No recruiting. No risk.</p>
        <div className="stats">
          <div className="stat-item">
            <h3>30%</h3>
            <p>lower costs</p>
          </div>
          <div className="stat-item">
            <h3>40%</h3>
            <p>less routine work</p>
          </div>
          <div className="stat-item">
            <h3>90%</h3>
            <p>satisfied teams & customers</p>
          </div>
        </div>
      </section>

      <section className="problems">
        <h2>Why AI Employees Will Help:</h2>
        <div className="problem-grid">
          <div className="problem-item">
            <h3>too expensive</h3>
            <p>Rising costs blocking growth? Routine tasks consuming valuable resources without sustainable benefit.</p>
            <p>AI employees automate processes, permanently reduce operating costs, and create room for real value creation.</p>
          </div>
          <div className="problem-item">
            <h3>too slow</h3>
            <p>Processes taking too long and opportunities being lost? Your team is drowning in manual tasks.</p>
            <p>AI employees accelerate processes immediately, ensure quick results, and increase your competitiveness.</p>
          </div>
          <div className="problem-item">
            <h3>too inefficient</h3>
            <p>Errors and inefficient routines preventing top performance and demotivating your team?</p>
            <p>Our AI optimizes processes, increases precision, and noticeably relieves employees - for productive and satisfied work.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Our Customers Speak for Us...</h2>
        <div className="testimonial-grid">
          <blockquote>
            <p>"Through AI process automation with NaturalIntelligence, we were able to reduce costs by 30%."</p>
            <footer>— Dr. John Smith, TechCorp</footer>
          </blockquote>
        </div>
      </section>

      <section className="cta">
        <h2>Interested? Book a Call!</h2>
        <p>Want to know if it's possible to implement AI in your company? The free initial consultation will bring clarity.</p>
        <button className="cta-button primary">Get Free Consultation</button>
        <p className="no-obligation">No obligations, just results</p>
      </section>
    </div>
  );
}

export default App;
