import axios from 'axios';
import {
  fetchEventsSuccess,
  fetchEventsRequest,
  fetchEventsError,
  addEventRequest,
  addEventSuccess,
  addEventError,
  // deleteEventHallsRequest,
  // deleteEventHallsSuccess,
  // deleteEventHallsError,
  updateEventRequest,
  updateEventSuccess,
  updateEventError,
} from './events-action';

axios.defaults.baseURL = 'https://events-tests.herokuapp.com/'

const fetchEvents = () => dispatch => {
    dispatch(fetchEventsRequest())

    axios
        .get('/api/v1/events')
        .then(({ data }) => dispatch(fetchEventsSuccess(data.result)))
        .catch(error => dispatch(fetchEventsError(error.message)))
}

const addEvent = event => dispatch => {
  const {eventStatus, date, city, eventName, concertHall, about, size} = event
  const newEvent = {active: eventStatus, eventName, dateEvent: date, city, hallName: concertHall, aboutEvent: about, size  }
  dispatch(addEventRequest())

  axios
    .post('/api/v1/events', newEvent)
    .then(({ data }) => dispatch(addEventSuccess(data)))
    .catch(error => dispatch(addEventError(error.message)))
}

const updateEvent = event => dispatch => {
  const {eventStatus, id, date, city, eventName, concertHall, about, size} = event
  console.log(size);
  const updateEvent = {active: eventStatus, eventName, dateEvent: date, city, hallName: concertHall, aboutEvent: about, size}
  dispatch(updateEventRequest())

  axios
  .put(`/api/v1/events/${id}`, updateEvent)
  .then(({data}) => dispatch(updateEventSuccess(data.result)))
  .catch(error => dispatch(updateEventError(error)))
}

export default { fetchEvents, addEvent, updateEvent }