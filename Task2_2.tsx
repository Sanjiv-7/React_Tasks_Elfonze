import React, { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');

  const passwordLength = password.length;

  let strengthMessage;
  if (passwordLength > 8) {
    strengthMessage = "Password is Strong";
  } else if (passwordLength > 4) {
    strengthMessage = "Password is Medium";
  } else if (passwordLength > 0) {
    strengthMessage = "Password is Weak";
  } else {
    strengthMessage = "";
  }

  return (
    <div>
     <h2>Password Strength Checker</h2>
      <input 
        type="text"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{strengthMessage}</p>
    </div>
  );
}

export default PasswordChecker;
