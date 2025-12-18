import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

/* ===============================
   LOGIN PAGE – BACKEND CONNECTED
================================ */
const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login submit (REAL BACKEND CALL)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { email, password } = formData;

    // Basic validation
    if (!email || !password) {
      setErrorMsg("Both fields are required");
      return;
    }

    setIsLoading(true);

    try {
      // 🔥 REAL BACKEND LOGIN API
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.message || "Invalid credentials");
        setIsLoading(false);
        return;
      }

      // ✅ LOGIN SUCCESS
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/", { replace: true });

    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg(
        "Cannot connect to server. Please make sure backend is running on http://localhost:5000"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue shopping</p>

        {errorMsg && <div className="login-error">{errorMsg}</div>}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="login-btn" type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </section>
  );
};

export default Login;
