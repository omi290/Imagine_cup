import React from 'react';
import UploadBox from '../components/UploadBox';
import FeedbackCard from '../components/FeedbackCard';

const PdfTutor = () => {
  return (
    <div className="container page pdf-tutor-page">
      <div className="page-header">
        <h1 className="page-title">PDF Tutor</h1>
        <p className="page-intro">
          Upload a PDF to generate quizzes, quick checks, and short feedback blurbs. Great for
          self-testing before class or practice.
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <span>1. Upload & outline</span>
            <span className="pill">Mind</span>
          </div>
          <UploadBox accept=".pdf" onFileUpload={() => {}} />
          <ul className="list" style={{ marginTop: '12px' }}>
            <li>We scan headings and key terms to build a quiz outline.</li>
            <li>Multiple-choice + short answer mix for varied recall.</li>
            <li>Clear answer keys so you can self-correct quickly.</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-header">
            <span>2. Sample feedback</span>
            <span className="pill">Clarity</span>
          </div>
          <FeedbackCard
            score={0.82}
            injuryRisk="None"
            feedback={[
              'Focus questions on definitions + one applied scenario.',
              'Add a 2-minute summary prompt to cement recall.',
              'Use one diagram labeling item per section.',
            ]}
          />
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
              <li>Lecture slides before exams.</li>
              <li>Reading summaries for homework.</li>
              <li>Creating a short quiz for friends.</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>Try this prompt</span>
              <span className="pill">Tip</span>
            </div>
            <ul className="list">
              <li>“Prioritize foundational definitions in section 2.”</li>
              <li>“Add one misconception check per chapter.”</li>
              <li>“Give me 2 reflection prompts to close.”</li>
            </ul>
          </div>
          <div className="card">
            <div className="card-header">
              <span>What you get</span>
              <span className="pill">Output</span>
            </div>
            <ul className="list">
              <li>5-10 quiz items with answers.</li>
              <li>Difficulty balance: recall, apply, connect.</li>
              <li>Short explanation for each item.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PdfTutor;


