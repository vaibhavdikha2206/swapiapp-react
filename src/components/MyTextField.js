import React, { useState } from 'react';

function MyTextField({ value,onTextChange,disabled }) {
  // State to hold the value of the text field
  const [text, setText] = useState('');

  // Event handler to update the state and call the function to update parent state
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    // Call the function passed as a prop to update the parent state with the text field value
    onTextChange(newText);
  };

  return (
    <div>
      {/* Text field component */}
      <input 
        type="text" 
        value={value}  
        onChange={handleChange}
        disabled={disabled} 
        placeholder="Enter text here" 
      />
    </div>
  );
}

export default MyTextField;