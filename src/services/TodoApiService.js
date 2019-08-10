import axios from 'axios';
import config from '../config';
import TokenService from './TokenService';
import jwtDecode from 'jwt-decode';

const TodoApiService = {
  postTodo(todoData) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    todoData.user_name = decoded.sub;
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/todos/new_todo`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: todoData
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  getTodos(trip_id) {
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/todos/get_todos/${trip_id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  updateTodo(data) {
    return axios({
      method: 'put',
      url: `${config.API_ENDPOINT}/todos/update_todo`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: {
        id: data.id,
        title: data.title,
        done_status: data.done_status
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  deleteTodo(todo_id) {
    return axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/todos/delete_todo`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: {
        todo_id
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

export default TodoApiService;
