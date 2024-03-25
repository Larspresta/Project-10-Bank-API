import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/user/login`, userData);
  if (response.data) {
    localStorage.setItem('userToken', response.data.token);
  }
  return response.data;
};

export default {
  login,
  //    ADD Logout later
};
