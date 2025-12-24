import React from 'react';
import UploadBox from '../components/UploadBox';

const Dance = () => {
  return (
    <div className="container page dance-page">
      <div className="page-header">
        <h1 className="page-title">Dance Posture Analysis</h1>
        <p className="page-intro">
          Upload a pose to review lines, balance, and softness. Good for ballet-inspired holds and
          contemporary shapes alike.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <span>Upload pose</span>
            <span className="pill">Body</span>
          </div>
          <UploadBox accept="image/*" onFileUpload={() => {}} />
          <ul className="list" style={{ marginTop: '12px' }}>
            <li>Full body in frame; avoid motion blur.</li>
            <li>Neutral backdrop helps see lines.</li>
            <li>Capture peak position, not transition.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <span>We check</span>
            <span className="pill">Lines</span>
          </div>
          <ul className="list">
            <li>Long lines through neck, arms, and legs.</li>
            <li>Hip alignment and ribcage stacking.</li>
            <li>Balance and foot articulation.</li>
            <li>Softness vs. tension in hands/shoulders.</li>
          </ul>
        </div>
      </div>

      <section className="section">
        <div className="grid-3">
          <div className="card">
            <div className="card-header">
              <span>Best for</span>
              <span className="pill">Use case</span>
            </div>
            <ul className="list">
              <li>Arabesque, tendu, and contemporary poses.</li>
              <li>Photoshoots needing clean posture.</li>
              <li>Balance checks before choreography.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Tips</span>
              <span className="pill">Form</span>
            </div>
            <ul className="list">
              <li>Think “crown lifts, shoulders melt down”.</li>
              <li>Keep ribs stacked over hips.</li>
              <li>Point or flex with intent; avoid in-between.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Output</span>
              <span className="pill">Feedback</span>
            </div>
            <ul className="list">
              <li>Line quality notes (head-to-toe).</li>
              <li>Balance + softness adjustments.</li>
              <li>Injury risk (low/med/high) guidance.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dance;


