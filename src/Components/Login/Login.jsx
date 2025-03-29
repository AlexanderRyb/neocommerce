import { useState } from "react";
import { useAuth } from "../../Context/CommerceContext"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signup, logout, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email); // Log email value
    console.log("Password:", password); // Log password value
  
    if (!email || !password) {
      console.error("Missing email or password");
      return;  // Don't continue if email or password is missing
    }
  
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      console.log("Signup successful");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.email}!</h1>
        <button onClick={logout}>Logout</button>

      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      <button type="button" onClick={handleSignup}>Sign Up</button>

    </form>
  );
};

export default Login;
