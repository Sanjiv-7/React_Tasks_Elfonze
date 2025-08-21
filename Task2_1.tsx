import React, { useState } from 'react';

function EmailValidator() {
  const [email, setEmail] = useState('');

  const isValidEmail = email.includes('@');

  return (
    <div>
      <h2>Email Validator</h2>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>
        {email ? (isValidEmail ? 'Valid Email' : 'Invalid Email') : ''}
      </p>
    </div>
  );
}

export default EmailValidator;
