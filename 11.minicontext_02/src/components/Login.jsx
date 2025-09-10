import React, { useState, useContext } from 'react';
import UserContext from '../context/user.context.js';
// import UserContext from '../context/user.context.js';  



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser({ username, password });

    console.log(setUser({username}));
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}> {/* Use onSubmit on the form */}
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='username' 
        />
        <input 
          type="password"  // Changed type to password for security
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password' 
        />
        <button type="submit">Submit</button> {/* Use type="submit" */}
      </form>
    </div>
  );
}

export default Login;