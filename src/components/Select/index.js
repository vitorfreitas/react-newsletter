import React from 'react';
import './style.css';

export default function Select({ name, options, placeholder, onChange }) {
  return (
    <select name={name} onChange={onChange} className='select'>
      <option>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
