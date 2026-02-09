import axios from "axios";

// const API_URL = "http://localhost:3001/users";
const API_URL = "https://6989f0d6c04d974bc6a0e4cc.mockapi.io/users";

export const getUsers = () => axios.get(API_URL);
export const createUser = (data) => axios.post(API_URL, data);
export const updateUser = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`);
