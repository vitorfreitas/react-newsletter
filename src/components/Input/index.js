import React from 'react';
import './style.css';

export default function Input({ name, placeholder, tabIndex, type, onChange }) {
  return (
    <input
      id='input'
      className='input'
      name={name || null}
      onChange={onChange}
      placeholder={placeholder}
      tabIndex={tabIndex}
      type={type || 'text'}
      min={0}
    />
  );
}
