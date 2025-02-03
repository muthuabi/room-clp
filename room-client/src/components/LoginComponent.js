import React, { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";

const dummyUsers = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "password" },
];

const LoginComponent = ({name}) => {

  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const user = dummyUsers.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (user) {
      toast.success("Login Successful!", { position: "top-center" });
    } else {
      toast.error("Invalid username or password!", { position: "top-center" });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        
        <div className="input-group">
          <FaUser className="icon" />
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            value={form.password}
            onChange={handleChange}
          />
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconButton>
        </div>

        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginComponent;
