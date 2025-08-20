import React, { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLogedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (<p>You are Logged in!</p>)
       : 
      (<p>You are logged out!</p>)}


      <button onClick={() => setIsLogedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
}

export default LoginStatus;
