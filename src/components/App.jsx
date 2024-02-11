import { useState, useEffect } from 'react';

import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const getInitialStats = () => {
  const savedStats = window.localStorage.getItem('saved-stats');
  if (savedStats !== null) {
    return JSON.parse(savedStats);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

const App = () => {
  const [stats, setStats] = useState(getInitialStats);

  useEffect(() => {
    window.localStorage.setItem('saved-stats', JSON.stringify(stats));
  }, [stats]);

  const totalFeedback = stats.good + stats.neutral + stats.bad;

  const positiveFeedback = Math.round(((stats.good + stats.neutral) / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setStats({ ...stats, [feedbackType]: stats[feedbackType] + 1 });
  };

  const onReset = () => {
    setStats({ ...stats, good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} onReset={onReset} />
      {totalFeedback > 0 ? (
        <Feedback stats={stats} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
