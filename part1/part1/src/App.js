import React from 'react';

// const App = () => {
//   console.log('Hello from Sweden!');
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('p', null, 'Hello world it is now ', now.toString()),
//     React.createElement('p', null, a, ' plus ', b, ' is ', a + b)
//   );
// };

const Hello = (props) => {
  return (
    <div>
      <p>
        {' '}
        Hello {props.name} you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = 'Peter';
  const age = '10';
  return (
    <div>
      <h1>
        {' '}
        Greetings
        <Hello name="gerorge" age={10 + 50} />
        <Hello name={name} age={age} />
      </h1>
    </div>
  );
};

export default App;
