import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const SomeComponent = () => {
  const [name, setName] = useState('Barney Stinson');
  const [input, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const updateName = (event) => {
    event.preventDefault();
    setName(input);
    console.log(name);

    setValue('');
  };
  return (
    <div style={{ gridColumn: '2' }}>
      <p>Howdy, {name}</p>
      <div>
        <input type="text" value={input} onChange={handleInput} />
        <Button variant="contained" onClick={updateName}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default SomeComponent;
