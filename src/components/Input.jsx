import React from 'react';

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
