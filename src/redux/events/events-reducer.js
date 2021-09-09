import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsError,
  addEventRequest,
  addEventSuccess,
  addEventError,
  idEvent,
  // deleteEventsSuccess,
  // deleteEventsRequest,
  // deleteEventsError,
  updateEventSuccess,
  updateEventRequest,
  updateEventError,
} from "./events-action"

const initialState = [];

const eventsReducer = createReducer(initialState, {
    [fetchEventsSuccess]: (_, { payload }) => payload,
    [addEventSuccess]: (state, { payload }) => [...state, payload],
    // [deleteEventsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [updateEventSuccess]: (state, {payload}) => {
      const newState = state.filter(event => event._id !== payload._id)
      return [...newState, payload]
    }
})

const loadingReducer = createReducer(false, {
  [fetchEventsRequest]: () => true,
  [fetchEventsSuccess]: () => false,
  [fetchEventsError]: () => false,
  [addEventRequest]: () => true,
  [addEventSuccess]: () => false,
  [addEventError]: () => false,
  // [deleteEventsRequest]: () => true,
  // [deleteEventsSuccess]: () => false,
  // [deleteEventsError]: () => false,
  [updateEventRequest]: () => true,
  [updateEventError]: () => false,
  [updateEventSuccess]: () => false,
});

const changeEventReducer = createReducer('', {
  [idEvent]: (state, {payload}) => payload
})

const errorReducer = createReducer(null, {})

export default combineReducers({
    events: eventsReducer,
    idEvent: changeEventReducer,
    loading: loadingReducer,
    error: errorReducer
})