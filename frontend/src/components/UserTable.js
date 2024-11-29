import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ users, onDelete }) => (
  <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", margin: "20px 0" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date of Birth</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.dob}</td>
          <td>
            <Link to={`/users/edit/${user.id}`}>Edit</Link> |{" "}
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
