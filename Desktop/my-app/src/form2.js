import React from 'react';
import { useState } from 'react';

function TextAreaForm() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Textarea Value:', message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Message:</label>
        <br />
        <textarea
          value={message}
          onChange={handleChange}
          rows="4"
          cols="50"
          placeholder="Type your message here..."
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TextAreaForm;