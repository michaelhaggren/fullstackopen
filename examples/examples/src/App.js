// import React from 'react';

import React, { useState } from 'react';
// import Component from './components/inputField';
import SomeComponent from './components/inputField';
import Header from './components/Header/Header.jsx';
import '/';
// import axios from 'axios';

const DisplayValue = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button
    style={{
      background: 'lightyellow',
      borderRadius: '50px',
      margin: '10',
      cursor: 'pointer',
    }}
    onClick={props.handleClick}
  >
    {props.text}
  </button>
);

const App = () => {
  const [value, setvalue] = useState(10);

  const setToValue = (newValue) => {
    setvalue(newValue);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        gridTemplateColumns: '1fr 400px 300px 1fr',
        placeItems: 'center',
      }}
    >
      <header style={{ gridColumn: '1 / span 4' }}>
        <Header />
      </header>
      <div>
        <SomeComponent />
      </div>
      <div style={{ gridColumn: '1', gridRow: '3' }}>
        <DisplayValue value={value} />
        <Button handleClick={() => setToValue(9999)} text="99luftballons" />
        <Button handleClick={() => setToValue(0)} text="reset" />
        <Button handleClick={() => setToValue(value - 1)} text="decrease" />
      </div>
    </div>
  );
};
export default App;
/* Denna går att använda för att debugga i devtools, likt breakpoints i visual studio */
// debugger;

// const Button = ({ handleClick, text }) => {
//   return <button onClick={handleClick}>{text}</button>;
// };

// const History = (props) => {
//   console.log(props);
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }
//   return <div>button press history: {props.allClicks.join(' ')}</div>;
// };

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = (L) => {
//     console.log(L);
//     setAll(allClicks.concat('L'));
//     setLeft(left + 1);
//   };

//   const handleRightClick = (R) => {
//     console.log(R);
//     setAll(allClicks.concat('R'));
//     setRight(right + 1);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };
// export default App;
/* const Display = ({ counter }) => (
  <div style={{ background: '#fce38a', color: 'black', fontSize: '2rem' }}>
  {counter}
  </div>
  );
  
  const App = () => {
    const [counter, setCounter] = useState(0);
    
    const increaseByOne = () => setCounter(counter + 1);
    const decreaseByOne = () => setCounter(counter - 1);
    const resetValue = () => setCounter(0);
    
    return (
      <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="+" />
      <Button handleClick={decreaseByOne} text="-" />
      <Button handleClick={resetValue} text="zero" />
      </div>
      );
    }; */

// const Hello = (props) => {
//   const name = props.name;
//   const age = props.age;

//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         {' '}
//         So you were probably born in year {bornYear()} (if my brain is correct)
//       </p>
//     </div>
//   );

// const getRandomUser = () => {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/todos')
//     .then(({ data }) => {
//       console.log(data);
//       return JSON.stringify(data);
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//     });
// };

// };
