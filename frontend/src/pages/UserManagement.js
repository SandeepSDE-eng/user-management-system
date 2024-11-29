import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api/users";
import UserTable from "../components/UserTable";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
};

export default UserManagement;
