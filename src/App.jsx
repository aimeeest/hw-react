import React, { useState } from 'react';
import InputField from './components/InputField';
import MessageDisplay from './components/MessageDisplay';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessages, setErrorMessages] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  const validateInput = () => {
    const { username, password, confirmPassword } = formData;
    const errors = [];

    if (!username || !password || !confirmPassword) {
      errors.push('⚠️ All fields must be filled.');
    }

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password) || !/[!@#?]/.test(password)) {
      errors.push('⚠️ Password must be at least 8 characters, with a mixture of uppercase and lowercase letters, numbers, and at least one special character.');
    }

    if (password !== confirmPassword) {
      errors.push('⚠️ Password and Confirm Password must match.');
    }

    return errors;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = () => {
    const errors = validateInput();

    if (errors.length === 0) {
      setIsRegistered(true);
      setErrorMessages([]);
    } else {
      setErrorMessages(errors);
    }
  };

  return (
    <div className='form'>
      <h2>Registration Form</h2>
      <InputField label="Username" name="username" type="text" value={formData.username} onChange={handleInputChange} />
      <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleInputChange} />
      <InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} />
      <button onClick={handleRegistration}>Register</button>
      
      <MessageDisplay errorMessages={errorMessages} isRegistered={isRegistered} />
    </div>
  );
};

export default RegistrationForm;
