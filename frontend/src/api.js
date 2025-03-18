import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
