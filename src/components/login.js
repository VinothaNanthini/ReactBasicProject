import React, { useState } from 'react';

function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div>
      {/* Conditionally render the button based on login state */}
      {!isLoggedIn && (
        <button onClick={toggleLogin}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      )}

      {/* Conditionally render the welcome message */}
      {isLoggedIn && <p>Welcome!</p>}
    </div>
  );
}

export default Toggle;
