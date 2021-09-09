import axios from 'axios';
import {
  fetchEventHallsSuccess,
  fetchEventHallsRequest,
  fetchEventHallsError,
  addEventHallRequest,
  addEventHallSuccess,
  addEventHallError,
  // deleteEventHallsRequest,
  // deleteEventHallsSuccess,
  // deleteEventHallsError,
  // updateEventHallsRequest,
  // updateEventHallsSuccess,
  // updateEventHallsError,
} from './eventHallsList-action';

axios.defaults.baseURL = 'http://localhost:4000/'

const fetchEventHalls = () => dispatch => {
    dispatch(fetchEventHallsRequest())

    axios
        .get('/api/v1/concert-halls')
        .then(({ data }) => dispatch(fetchEventHallsSuccess(data.result)))
        .catch(error => dispatch(fetchEventHallsError(error.message)))
}

const addEvent = (name, city, date, hall, about) => dispatch => {
  dispatch(addEventHallRequest())

  axios
    .post('/api/v1/events')
    .then(({ data }) => dispatch(addEventHallSuccess(data)))
    .catch(error => dispatch(addEventHallError(error.message)))
}

export default { fetchEventHalls, addEvent }