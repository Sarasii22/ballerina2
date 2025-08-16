import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Stay Compliant, Stay Ahead – AI-Powered Real-Time Compliance Monitoring</h1>
        <p>Automatically track regulations, map to your processes, and get instant alerts.</p>
        <Link to="/demo"><button className="cta-button">Try Live Demo</button></Link>
      </section>
      <section className="how-it-works">
        <div className="step">
          <h2>Step 1: Scan</h2>
          <p>NLP scans legal documents for rules.</p>
        </div>
        <div className="step">
          <h2>Step 2: Compare</h2>
          <p>ML matches rules to your operations.</p>
        </div>
        <div className="step">
          <h2>Step 3: Alert</h2>
          <p>Instant notifications and updates.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;