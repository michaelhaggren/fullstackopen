import './App.css';
import React, { useState } from 'react';
import Button from './components/Button.jsx';

const Statistic = ({ text, value }) => (
  <tr>
    <td>
      <strong>{text}:</strong>
    </td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good * 100) / total;

  return total === 0 ? (
    <div>
      <div>
        <h2>Statistics</h2>
      </div>
      <div>
        <p>No feedback given</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <h2>Statistics</h2>
      </div>
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive + '%'} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div>
        <h1>Give Feedback</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button handleClick={() => setGood(good + 1)} text="Good" />
          <Button
            handleClick={() => setNeutral(neutral + 0.5)}
            text="Neutral"
          />
          <Button handleClick={() => setBad(bad - 1)} text="Bad" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}></div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
