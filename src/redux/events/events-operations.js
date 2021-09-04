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
  // updateEventHallsRequest,
  // updateEventHallsSuccess,
  // updateEventHallsError,
} from './events-action';

axios.defaults.baseURL = 'https://events-tests.herokuapp.com'

const fetchEvents = () => dispatch => {
    dispatch(fetchEventsRequest())

    axios
        .get('/api/v1/events')
        .then(({ data }) => dispatch(fetchEventsSuccess(data.result)))
        .catch(error => dispatch(fetchEventsError(error.message)))
}

const addEvent = event => dispatch => {
  const {eventStatus, date, city, eventName, concertHall, about, row1, row2, row3, row4} = event
  const newEvent = {active: eventStatus, eventName, dateEvent: date, city, hallName: concertHall, aboutEvent: about, size:{ hall:[{row1}, {row2}, {row3}, {row4}]}  }
  dispatch(addEventRequest())

  axios
    .post('/api/v1/events', newEvent)
    .then(({ data }) => dispatch(addEventSuccess(data)))
    .catch(error => dispatch(addEventError(error.message)))
}

export default { fetchEvents, addEvent }