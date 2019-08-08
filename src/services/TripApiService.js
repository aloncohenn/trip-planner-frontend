import axios from 'axios';
import config from '../config';
import TokenService from './TokenService';

const TripApiService = {
  getTrips() {
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/trips`,
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

  postTrip({ user_id, title, destination, start_date, end_date }) {
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/trips/new_trip`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: {
        user_id,
        title,
        destination,
        start_date,
        end_date
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  deleteJob(id) {
    return axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/jobs/${id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  editJob({ edits }) {
    return axios({
      method: 'patch',
      url: `${config.API_ENDPOINT}/jobs/${edits.id}`,
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

export default TripApiService;
