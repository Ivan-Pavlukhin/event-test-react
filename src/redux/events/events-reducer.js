import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsError,
  addEventRequest,
  addEventSuccess,
  addEventError,
  // idEvent,
  // deleteEventsSuccess,
  // deleteEventsRequest,
  // deleteEventsError,
  // updateEventsSuccess,
  // updateEventsRequest,
  // updateEventsError,
} from "./events-action"

const initialState = [];

const eventsReducer = createReducer(initialState, {
    [fetchEventsSuccess]: (_, { payload }) => payload,
    [addEventSuccess]: (state, { payload }) => [...state, payload],
    // [deleteEventsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    // [updateEventsSuccess]: (state, {payload}) => [...state, payload.data]
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
  // [updateEventsRequest]: () => true,
  // [updateEventsError]: () => false,
  // [updateEventsSuccess]: () => false,
});

// const viewEventReducer = createReducer('', {
//   [idEvent]: (state, {payload}) => payload
// })

const errorReducer = createReducer(null, {})

export default combineReducers({
    events: eventsReducer,
    // idEvent: viewEventReducer,
    loading: loadingReducer,
    error: errorReducer
})