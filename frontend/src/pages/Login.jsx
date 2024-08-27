import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      alert("Login successfully");
      navigate('/')

    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
      className="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
      className="password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button className="button" type="submit">Login</button>
      <br/>
      <p className="p">
        Don't have an acount ?{" "}
        <NavLink className="loginBtn" to="/register">
          Register
        </NavLink>
      </p>
      <footer>
        <p>© 2024 UmeshChauhan, Inc</p>
      </footer>
    </form>
  );
};

export default Login;
