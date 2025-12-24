import PropTypes from 'prop-types';

const FeedbackCard = ({ score, feedback, injuryRisk }) => {
  return (
    <div className="feedback-card">
      <h3>Analysis Result</h3>
      <div className="score">
        <span>Score: {(score * 100).toFixed(0)}%</span>
      </div>
      <div className="feedback-list">
        <h4>Feedback:</h4>
        <ul>
          {feedback.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="injury-risk">
        <span>Injury Risk: {injuryRisk}</span>
      </div>
    </div>
  );
};

FeedbackCard.propTypes = {
  score: PropTypes.number.isRequired,
  feedback: PropTypes.arrayOf(PropTypes.string).isRequired,
  injuryRisk: PropTypes.string.isRequired,
};

export default FeedbackCard;
 