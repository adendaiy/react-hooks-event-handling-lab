// Code Keypad Component Here

import React from 'react';

function Keypad() {
  function handleChange(event) {
    console.log('Entering password...');
  }

  return (
    <div>
      <label htmlFor="password">Enter password:</label>
      <input type="password" id="password" name="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;


