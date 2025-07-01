import React from 'react';
import  { useState } from 'react';

function SelectForm() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select a fruit:</label>
      <br />
      <select value={selectedOption} onChange={handleChange}>
        <option value="">--Choose an option--</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="mango">Mango</option>
        <option value="orange">Orange</option>
      </select>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default SelectForm

