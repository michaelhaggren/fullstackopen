import React from 'react';

const InputBox = (props) => {
  return (
    <div>
      {props.text}
      <input value={props.value} onChange={props.onChange} />
    </div>
  );
};

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <InputBox
        text="name:"
        value={props.nameValue}
        onChange={props.nameOnChange}
      />
      <InputBox
        text="number:"
        value={props.numberValue}
        onChange={props.numberOnChange}
      />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
