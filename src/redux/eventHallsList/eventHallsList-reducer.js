import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  fetchEventHallsRequest,
  fetchEventHallsSuccess,
  fetchEventHallsError,
  addEventHallRequest,
  addEventHallSuccess,
  addEventHallError,
  idEventHall,
  deleteEventHallsSuccess,
  deleteEventHallsRequest,
  deleteEventHallsError,
  updateEventHallsSuccess,
  updateEventHallsRequest,
  updateEventHallsError,
} from "./eventHallsList-action"

const initialState = [];

const eventHallsReducer = createReducer(initialState, {
    [fetchEventHallsSuccess]: (_, { payload }) => payload,
    [addEventHallSuccess]: (state, { payload }) => [...state, payload],
    [deleteEventHallsSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [updateEventHallsSuccess]: (state, {payload}) => [...state, payload.data]
})

const loadingReducer = createReducer(false, {
  [fetchEventHallsRequest]: () => true,
  [fetchEventHallsSuccess]: () => false,
  [fetchEventHallsError]: () => false,
  [addEventHallRequest]: () => true,
  [addEventHallSuccess]: () => false,
  [addEventHallError]: () => false,
  [deleteEventHallsRequest]: () => true,
  [deleteEventHallsSuccess]: () => false,
  [deleteEventHallsError]: () => false,
  [updateEventHallsRequest]: () => true,
  [updateEventHallsError]: () => false,
  [updateEventHallsSuccess]: () => false,
});

const viewHallReducer = createReducer('', {
  [idEventHall]: (state, {payload}) => payload
})

const errorReducer = createReducer(null, {})

export default combineReducers({
    eventHalls: eventHallsReducer,
    idHall: viewHallReducer,
    loading: loadingReducer,
    error: errorReducer
})