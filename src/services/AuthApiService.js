import axios from 'axios';
import config from '../config';

const AuthApiService = {
  postUser({ username, password }) {
    console.log(username);
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
        return error.response;
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
        return error.response;
      });
  }
};

export default AuthApiService;
