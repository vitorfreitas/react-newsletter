import React from 'react';
import './style.css';
import Input from '../Input';
import Button from '../Button';

export default function CardFront({ onClick, onChange }) {
  return (
    <div className='card'>
      <h1 className='card__title'>
        <span className='card__title--focus'>Let's</span> get started!
      </h1>
      <div className='card__inputs'>
        <Input
          placeholder='Full name'
          name='name'
          onChange={onChange}
          tabIndex={1}
        />
        <Input
          placeholder='Your age'
          name='age'
          onChange={onChange}
          tabIndex={2}
          type='number'
        />
      </div>
      <Button text='Sign up' onClick={onClick} />
    </div>
  );
}
