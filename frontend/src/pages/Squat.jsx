import React from 'react';
import UploadBox from '../components/UploadBox';

const Squat = () => {
  return (
    <div className="container page squat-page">
      <div className="page-header">
        <h1 className="page-title">Squat Posture Analysis</h1>
        <p className="page-intro">
          Check depth, knee tracking, and spine position. Upload a side or 45° view for clearer
          alignment feedback.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <span>Upload a frame</span>
            <span className="pill">Body</span>
          </div>
          <UploadBox accept="image/*" onFileUpload={() => {}} />
          <ul className="list" style={{ marginTop: '12px' }}>
            <li>Frame should include feet, knees, hips, and head.</li>
            <li>Neutral shoes; avoid extreme angles or filters.</li>
            <li>Pause at bottom of squat for the capture.</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-header">
            <span>We check</span>
            <span className="pill">Safety</span>
          </div>
          <ul className="list">
            <li>Knee travel vs. toe line and valgus/varus drift.</li>
            <li>Spine neutrality and ribcage position.</li>
            <li>Depth relative to hip crease and comfort.</li>
            <li>Foot pressure (mid-foot vs heel/toe bias).</li>
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
              <li>Bodyweight squats and goblet squats.</li>
              <li>Checking warm-up form before loading.</li>
              <li>Rehab-friendly alignment checks.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Tips</span>
              <span className="pill">Form</span>
            </div>
            <ul className="list">
              <li>“Knees track over 2nd toe” to avoid collapse.</li>
              <li>Brace lightly: exhale half, then hold through descent.</li>
              <li>Think “sit between hips” not “forward bend”.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Output</span>
              <span className="pill">Feedback</span>
            </div>
            <ul className="list">
              <li>Depth and knee tracking notes.</li>
              <li>Spine + brace reminders.</li>
              <li>Injury risk (low/med/high) with next steps.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Squat;


