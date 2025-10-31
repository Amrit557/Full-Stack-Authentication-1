import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState(""); // state for username
  const [password, setPassword] = useState(""); // state for password
  const [error, setError] = useState("");       // state for validation message

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (username === "" || password === "") {
      setError("Please fill in both fields");
    } else {
      setError("");
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );

}

export default LoginForm;
