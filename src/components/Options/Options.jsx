import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, onReset }) => {
  return (
    <div className={css.btnContainer}>
      <button onClick={() => updateFeedback('good')} className={css.optionButton}>
        Good
      </button>
      <button onClick={() => updateFeedback('neutral')} className={css.optionButton}>
        Neutral
      </button>
      <button onClick={() => updateFeedback('bad')} className={css.optionButton}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={onReset} className={css.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
