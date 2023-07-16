import React from 'react';

const Input = ({ id, label, type, name, value, setValue, ...props }) => {
  return (
    <div className='col'>
      <label className='col-form-label' htmlFor={id}>
        {label}
      </label>
      <input
        className='form-control'
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        style={{
          background: 'linear-gradient(to bottom, #007bff, #0000ff)',
          color: '#fff',
        }}
        {...props}
      />
    </div>
  );
};

export default Input;
