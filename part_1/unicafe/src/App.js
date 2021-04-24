import React, { useState } from 'react';
import RandomQuoteButton from './Button.jsx';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const randomQuote = () => {
  return Math.floor(Math.random() * anecdotes.length);
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const setVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Anecdote
        title="Anecdote of the day"
        anecdote={anecdotes[selected]}
        numVotes={votes[selected]}
      />
      <div
        style={{
          display: 'flex',
          width: '250px',
          justifyContent: 'space-evenly',
        }}
      >
        <RandomQuoteButton handleClick={setVote} text="vote" />
        <RandomQuoteButton
          handleClick={() => setSelected(randomQuote)}
          text="next quote"
        />
      </div>
    </div>
  );
};

const Anecdote = ({ title, anecdote, numVotes }) => (
  <div>
    <h1>{title}</h1>
    <div>{anecdote}</div>
    <div>{numVotes}</div>
  </div>
);

export default App;
