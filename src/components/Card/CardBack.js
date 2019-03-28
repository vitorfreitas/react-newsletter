import React from 'react';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import './style.css';

export default function CardBack({ onClick, onChange }) {
  const options = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className='card'>
      <h1 className='card__title'>
        Tell me more about <span className='card__title--focus'>you</span>!
      </h1>
      <div className='card__inputs'>
        <Input
          placeholder='Email address'
          name='email'
          onChange={onChange}
          tabIndex={1}
        />
        <Select
          name='newsletter'
          onChange={onChange}
          options={options}
          placeholder='Newsletter'
        />
      </div>
      <Button text='Finish' onClick={onClick} />
    </div>
  );
}
