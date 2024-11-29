import React, { useState } from "react";

const UserForm = ({ initialData = {}, onSubmit }) => {
    const [formData, setFormData] = useState({
      name: initialData.name || "",
      email: initialData.email || "",
      dob: initialData.dob || "",
      password: initialData.password || "", // Ensure password field exists
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData); // Ensure all fields are passed
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

export default UserForm;
