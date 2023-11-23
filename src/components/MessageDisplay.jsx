import React from 'react';

const MessageDisplay = ({ errorMessages, isRegistered }) => {
  return (
    <div>
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

export default MessageDisplay;
