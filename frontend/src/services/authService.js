/* import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user/login/';

const login = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem('token', response.data.token);
    return response.data;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

export default { login, logout }; */
