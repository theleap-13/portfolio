import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="hero-avatar">👤</div>
        <div className="hero-text">
          <h1>Dalip Singh</h1>
          <p>Passionate Developer · AI &amp; NLP Enthusiast</p>
        </div>
      </div>

      {/* About Me */}
      <div className="section">
        <h2>About Me</h2>
        <p>I am a passionate developer.</p>
      </div>

      {/* Research Interests */}
      <div className="section">
        <h2>Research Interests</h2>
        <ul>
          <li>Artificial Intelligence (AI)</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Deep Neural Networks (DNN)</li>
        </ul>
      </div>

      {/* Personal Details */}
      <div className="section">
        <h2>Personal Details</h2>
        <div className="detail-grid">
          <div className="detail-item">
            <label>Name</label>
            <span>Dalip Singh</span>
          </div>
          <div className="detail-item">
            <label>Phone</label>
            <span>9855663352</span>
          </div>
          <div className="detail-item">
            <label>Personal Email</label>
            <span>dalipsingh@gmail.com</span>
          </div>
          <div className="detail-item">
            <label>College Email</label>
            <span>se23uari030@mahindrauniversity.edu.in</span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill-tag">Python</span>
          <span className="skill-tag">Java</span>
          <span className="skill-tag">React</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
