import axios from 'axios';
import config from '../config';

const AuthApiService = {
  postUser({ username, password }) {
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/users`,
      headers: {
        'content-type': 'application/json'
      },
      data: {
        user_name: username,
        password
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        console.log(error);
        return error.response.data;
      });
  },

  postLogin({ username, password }) {
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/auth/login`,
      headers: {
        'content-type': 'application/json'
      },
      data: {
        user_name: username,
        password
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  }
};

export default AuthApiService;
