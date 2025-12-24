import React from 'react';
import UploadBox from '../components/UploadBox';

const Boxing = () => {
  return (
    <div className="container page boxing-page">
      <div className="page-header">
        <h1 className="page-title">Boxing / Martial Arts Posture</h1>
        <p className="page-intro">
          Upload a stance photo to review guard height, stance width, and hip rotation. Keep hands
          visible and chin tucked.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <span>Upload stance</span>
            <span className="pill">Body</span>
          </div>
          <UploadBox accept="image/*" onFileUpload={() => {}} />
          <ul className="list" style={{ marginTop: '12px' }}>
            <li>Show feet placement and hand position.</li>
            <li>Take from a 45° angle for hips + shoulders.</li>
            <li>Relax shoulders; keep elbows near ribs.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <span>We check</span>
            <span className="pill">Control</span>
          </div>
          <ul className="list">
            <li>Stance width and weight distribution.</li>
            <li>Guard height relative to chin and cheeks.</li>
            <li>Hip rotation vs. knee alignment.</li>
            <li>Rear heel position (ready to pivot).</li>
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
              <li>Jab-cross stance checks.</li>
              <li>Light sparring posture review.</li>
              <li>Kickboxing guard awareness.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Tips</span>
              <span className="pill">Form</span>
            </div>
            <ul className="list">
              <li>Hands level with eyebrows and cheeks.</li>
              <li>Chin slightly tucked, eyes forward.</li>
              <li>Back heel light; knees softly bent.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Output</span>
              <span className="pill">Feedback</span>
            </div>
            <ul className="list">
              <li>Guard + stance alignment notes.</li>
              <li>Hip rotation suggestions.</li>
              <li>Injury risk (low/med/high) and fixes.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxing;


