import React from 'react';
import AddBtn from '../shared/AddBtn/AddBtn';

const AddItemGen = (actionCreator, placeholder) => ({dispatch}) => {
  let input;

  const handleEvent = e => {
    if (((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') && input.value.trim()) {
      e.preventDefault();
      dispatch(actionCreator(input.value));
      input.value = '';
    }
  }

  return (
    <div>
      <input ref={node => input = node} onKeyPress={handleEvent} type="text" placeholder={placeholder} />
      <AddBtn onClick={handleEvent} />
    </div>
  );
};

export default AddItemGen;

