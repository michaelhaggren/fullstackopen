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

const Hello = () => {
  return (
    <div>
      <p> Hello world</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>
        {' '}
        Greetings
        <Hello />
      </h1>
    </div>
  );
};

export default App;
