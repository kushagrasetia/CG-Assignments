import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getReceptionistBoard() {
    return axios.get(API_URL + 'receptionist', { headers: authHeader() });
  }

  getManagerBoard() {
    return axios.get(API_URL + 'manager', { headers: authHeader() });
  }

  getOwnerBoard() {
    return axios.get(API_URL + 'owner', { headers: authHeader() });
  }
}

export default new UserService();
