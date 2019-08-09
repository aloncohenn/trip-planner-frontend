import axios from 'axios';
import config from '../config';
import TokenService from './TokenService';
import jwtDecode from 'jwt-decode';

const TodoApiService = {
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
        console.log(res);
        return res;
      })
      .catch(error => {
        console.log(error);
        return error.response.data;
      });
  },

  postTodo(todoData) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    todoData.user_name = decoded.user_name;
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
  },

  editTodo({ edits }) {
    return axios({
      method: 'patch',
      url: `${config.API_ENDPOINT}/todos/${edits.id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `${TokenService.getAuthToken()}`
      },
      data: {
        _id: edits.id
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
