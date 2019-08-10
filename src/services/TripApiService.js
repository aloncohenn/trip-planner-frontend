import axios from 'axios';
import config from '../config';
import TokenService from './TokenService';
import jwtDecode from 'jwt-decode';

const TripApiService = {
  getTrips() {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    return axios({
      method: 'get',
      url: `${config.API_ENDPOINT}/trips/get_trips/${decoded.user_id}`,
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

  postTrip(tripData) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    // add the user id to the request
    tripData.user_id = decoded.user_id;
    return axios({
      method: 'post',
      url: `${config.API_ENDPOINT}/trips/new_trip`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: tripData
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  deleteTrip(trip_id) {
    return axios({
      method: 'delete',
      url: `${config.API_ENDPOINT}/trips/delete_trip`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: {
        trip_id
      }
    })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error.response.data;
      });
  },

  updateTrip(tripData) {
    const authToken = TokenService.getAuthToken();
    const decoded = jwtDecode(authToken);
    // add the user id to the request
    tripData.user_id = decoded.user_id;
    return axios({
      method: 'put',
      url: `${config.API_ENDPOINT}/trips/update_trip`,
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      data: tripData
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
