import React from 'react';
import UploadBox from '../components/UploadBox';

const Yoga = () => {
  return (
    <div className="container page yoga-page">
      <div className="page-header">
        <h1 className="page-title">Yoga Posture Analysis</h1>
        <p className="page-intro">
          Upload a still image to review balance, hip square, and spine length. We focus on safe,
          steady cues first.
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
            <li>Ensure whole body is visible (feet to crown).</li>
            <li>Natural lighting helps spot alignment cues.</li>
            <li>Hold a calm breath; no need to over-pose.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <span>We check</span>
            <span className="pill">Safety first</span>
          </div>
          <ul className="list">
            <li>Weight distribution: even on both feet/hands.</li>
            <li>Hip square and neutral spine (avoid over-arch).</li>
            <li>Shoulder stacking and soft gaze.</li>
            <li>Breath pacing suggestions.</li>
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
              <li>Warrior II, Triangle, Tree, Chair.</li>
              <li>Balance and grounding checks.</li>
              <li>Breath reminders for longer holds.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Tips</span>
              <span className="pill">Form</span>
            </div>
            <ul className="list">
              <li>Think “long spine” more than “deep bend”.</li>
              <li>Micro-bend knees to protect joints.</li>
              <li>Press through all four corners of the feet.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Output</span>
              <span className="pill">Feedback</span>
            </div>
            <ul className="list">
              <li>Alignment notes (hips, shoulders, spine).</li>
              <li>Balance + breath suggestions.</li>
              <li>Injury risk guidance (low/med/high).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yoga;


