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

axios.defaults.baseURL = 'https://events-tests.herokuapp.com/'

const fetchEventHalls = () => dispatch => {
    dispatch(fetchEventHallsRequest())

    axios
        .get('/api/v1/concert-halls')
        .then(({ data }) => dispatch(fetchEventHallsSuccess(data.result)))
        .catch(error => dispatch(fetchEventHallsError(error.message)))
}

const addEvent = (data) => dispatch => {
  dispatch(addEventHallRequest())

  axios
    .post('/api/v1/concert-halls', data)
    .then(({ data }) => dispatch(addEventHallSuccess(data)))
    .catch(error => dispatch(addEventHallError(error.message)))
}

export default { fetchEventHalls, addEvent }