import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v1/users";

export const getUsers = async () => axios.get(BASE_URL);

export const getUserById = async (id) => axios.get(`${BASE_URL}/${id}`);

export const createUser = async (data) => axios.post(BASE_URL, data);

export const updateUser = async (id, data) =>
  axios.put(`${BASE_URL}/${id}`, data);

export const deleteUser = async (id) => axios.delete(`${BASE_URL}/${id}`);
