import React, { useState } from "react";
import { createUser } from "../api/users";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
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

    if (!formData.name || !formData.email || !formData.password || !formData.dob) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await createUser(formData);

      if (response.status === 201) {
        alert("User added successfully!");
        setFormData({
          name: "",
          email: "",
          password: "",
          dob: "",
        });
      } else {
        alert(`Failed to add user: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error adding user:", error.response || error.message);
      if (error.response && error.response.data) {
        alert(`Error: ${error.response.data.message || "Failed to add user."}`);
      } else {
        alert("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Full Name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
