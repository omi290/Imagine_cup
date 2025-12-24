import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/theme.css';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container page landing-page">
      <div className="card hero">
        <div>
          <div className="pill">Unified AI mentor for mind & motion</div>
          <h1 className="hero-title">CodeX keeps every learner on track, calmly.</h1>
          <p className="hero-subtitle">
            Upload readings to quiz yourself, or drop in a pose image to check alignment.
            Everything is organized in one distraction-free workspace.
          </p>
          <div className="action-row">
            <button className="btn" onClick={handleGetStarted}>
              Enter dashboard
            </button>
            <Link className="btn secondary" to="/pdf-tutor">
              Try PDF tutor
            </Link>
          </div>
          <div className="stat-row" style={{ marginTop: '18px' }}>
            <div className="stat">
              <strong>Dual tracks</strong>
              <span>Mind (quizzes) and Body (posture) side-by-side.</span>
            </div>
            <div className="stat">
              <strong>Clear feedback</strong>
              <span>Actionable guidance, no noise or ads.</span>
            </div>
            <div className="stat">
              <strong>Safe form</strong>
              <span>Alignment cues to reduce injury risk.</span>
            </div>
          </div>
        </div>
        <div className="card hero-card">
          <div className="card-header">
            <span>Today&apos;s plan</span>
            <span className="pill">Focus</span>
          </div>
          <ul className="list">
            <li>Upload lecture PDF → auto quiz</li>
            <li>Review yoga balance & breath cues</li>
            <li>Check squat depth & knee tracking</li>
            <li>End with a calm stretch or dance pose</li>
          </ul>
        </div>
      </div>

      <section className="section">
        <h2>Pick a path</h2>
        <div className="grid-3">
          {[
            { title: 'PDF Tutor', body: 'Generate quizzes and explanations from any PDF.', path: '/pdf-tutor' },
            { title: 'Dashboard', body: 'See both learning tracks in one calm space.', path: '/dashboard' },
            { title: 'Yoga', body: 'Balance, spine length, and breath pacing cues.', path: '/yoga' },
            { title: 'Squat', body: 'Depth, knee tracking, and neutral spine reminders.', path: '/squat' },
            { title: 'Boxing', body: 'Guard height, stance width, and hip rotation.', path: '/boxing' },
            { title: 'Dance', body: 'Lines, posture, and softness for static poses.', path: '/dance' },
          ].map((card) => (
            <Link to={card.path} key={card.path} className="card">
              <div className="card-header">
                <span>{card.title}</span>
                <span className="pill">Open</span>
              </div>
              <p className="hero-subtitle">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="card-header">
            <span>Built to teach calmly</span>
            <span className="pill">Educational</span>
          </div>
          <div className="grid-2">
            <div className="list">
              <li>Short instructions before every action.</li>
              <li>Progressive reveal of options to avoid overwhelm.</li>
              <li>Consistent cards so navigation feels familiar.</li>
            </div>
            <div className="list">
              <li>Practice-first: quiz, review, then reflect.</li>
              <li>Movement safety: balance + breathing cues first.</li>
              <li>Clear CTAs: one primary action per section.</li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;


