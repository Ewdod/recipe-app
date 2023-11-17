
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "asd" && password === "asd") {
      console.log("Login successful!");
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="toggle-password" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;

// import { useState, useContext } from "react"
// import { AuthContext } from "../../context/AuthContext.jsx"
// import { useNavigate } from "react-router-dom"
// const Login = () => {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const {login} = useContext(AuthContext)
//   const navigate = useNavigate()

//     const handleLogin = async (e) => {
//       e.preventDefault()
//       try {
//         await login(email, password);
//         navigate("/")
//       } catch (error) {
//         alert("Login failed")
//       }
//     }

//   return (
//     <div className="login-form">
//       <form onSubmit={handleLogin}>
//         <input type="text"  placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }

// export default Login
