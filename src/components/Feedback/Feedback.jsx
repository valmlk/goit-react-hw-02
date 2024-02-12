import css from './Feedback.module.css';

const Feedback = ({ stats, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <p className={css.option}>Good: {stats.good}</p>
      <p className={css.option}>Neutral: {stats.neutral}</p>
      <p className={css.option}>Bad: {stats.bad}</p>
      <p className={css.option}>Total: {totalFeedback}</p>
      <p className={css.option}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
