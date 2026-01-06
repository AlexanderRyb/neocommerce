import { useState } from "react";
import { useContextStore } from "../../Context/CommerceContext";
import "./styles.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [mode, setMode] = useState("register"); // "register" | "login"

  const { login, signup, logout, user } = useContextStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        if (password !== repeatPassword) return;
        await signup(email, password);
      }
    } catch (error) {
      console.error("Auth failed", error);
    }
  };

  if (user) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <h2>Welcome, {user.email}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>{mode === "register" ? "Register" : "Login"}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {mode === "register" && (
          <input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        )}

        <button type="submit">
          {mode === "register" ? "Register" : "Login"}
        </button>

        <div className="auth-switch">
          <p>
            {mode === "register"
              ? "Already have an account?"
              : "Don't have an account?"}
          </p>
          <button
            type="button"
            onClick={() =>
              setMode(mode === "register" ? "login" : "register")
            }
          >
            {mode === "register" ? "Log in" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;