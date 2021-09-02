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

axios.defaults.baseURL = 'https://events-tests.herokuapp.com'

const fetchEventHalls = () => dispatch => {
    dispatch(fetchEventHallsRequest())

    axios
        .get('/api/v1/concerthalls')
        .then(({ data }) => dispatch(fetchEventHallsSuccess(data.result)))
        .catch(error => dispatch(fetchEventHallsError(error.message)))
}

const addEvent = (name, city, date, hall, about) => dispatch => {
  dispatch(addEventHallRequest())

  axios
    .post('events-test.events')
    .then(({ data }) => dispatch(addEventHallSuccess(data)))
    .catch(error => dispatch(addEventHallError(error.message)))
}

export default { fetchEventHalls, addEvent }