import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/theme.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const tracks = [
    {
      title: 'PDF Tutor',
      path: '/pdf-tutor',
      summary: 'Upload a PDF to auto-generate quizzes and quick checks.',
      focus: ['Mind', 'Formative assessment', 'Short reviews'],
    },
    {
      title: 'Yoga',
      path: '/yoga',
      summary: 'Balance, breath, and spine alignment for key poses.',
      focus: ['Body', 'Safety first', 'Calm pacing'],
    },
    {
      title: 'Squat',
      path: '/squat',
      summary: 'Depth, knee tracking, and neutral spine guidance.',
      focus: ['Body', 'Strength', 'Joint safety'],
    },
    {
      title: 'Boxing / MA',
      path: '/boxing',
      summary: 'Guard height, stance width, and hip rotation cues.',
      focus: ['Body', 'Footing', 'Explosive control'],
    },
    {
      title: 'Dance',
      path: '/dance',
      summary: 'Lines, posture, softness, and balance for poses.',
      focus: ['Body', 'Expression', 'Control'],
    },
  ];

  return (
    <div className="container page dashboard-page">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-intro">
          Choose a focus for today. We keep both tracks—mind for academic practice and body for
          posture—together in one calm layout.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <span>🧠 Mind</span>
            <span className="pill">Quiz & reflect</span>
          </div>
          <p className="page-intro">
            Start with a PDF upload to generate quiz questions, quick checks, and short feedback
            blurbs. Great for warm-up before movement.
          </p>
          <button className="btn" type="button" onClick={() => navigate('/pdf-tutor')}>
            Open PDF tutor
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <span>🏃 Body</span>
            <span className="pill">Alignment & safety</span>
          </div>
          <p className="page-intro">
            Pick a posture flow to get specific cues on balance, joint safety, and breathing. Each
            card keeps instructions short and actionable.
          </p>
          <div className="action-row">
            <button className="btn secondary" type="button" onClick={() => navigate('/yoga')}>
              Start with yoga
            </button>
            <button className="btn secondary" type="button" onClick={() => navigate('/squat')}>
              Check squat form
            </button>
          </div>
        </div>
      </div>

      <section className="section">
        <h2>All flows</h2>
        <div className="grid-3">
          {tracks.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className="card"
              style={{ textAlign: 'left' }}
            >
              <div className="card-header">
                <span>{item.title}</span>
                <span className="pill">{item.focus[0]}</span>
              </div>
              <p className="hero-subtitle">{item.summary}</p>
              <div className="list">
                {item.focus.slice(1).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;


