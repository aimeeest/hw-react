import { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  const validateInput = () => {
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
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button onClick={handleRegistration}>Register</button>

      {errorMessages.length > 0 && (
        <div className='error'>
          <ul>
            {errorMessages.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </ul>
        </div>
      )}

      {isRegistered && (
        <div className='success'>
          <p>✅ Registration Successful!</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
