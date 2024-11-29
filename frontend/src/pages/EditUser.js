import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api/users";
import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserById(id);
      setUser(data);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (data) => {
    await updateUser(id, data);
    alert("User updated successfully!");
  };

  return (
    <div>
      <h1>Edit User</h1>
      {user && <UserForm initialData={user} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditUser;
