import { createAction } from "@reduxjs/toolkit"

export const fetchEventHallsRequest = createAction('EventHalls/fetchEventHallsRequest')
export const fetchEventHallsSuccess = createAction('EventHalls/fetchEventHallsSuccess')
export const fetchEventHallsError = createAction('EventHalls/fetchEventHallsError')

export const addEventHallRequest = createAction('EventHalls/addEventHallsRequest')
export const addEventHallSuccess = createAction('EventHalls/addEventHallsSuccess')
export const addEventHallError = createAction('EventHalls/addEventHallsError')

export const deleteEventHallsRequest = createAction('EventHalls/deleteEventHallsRequest')
export const deleteEventHallsSuccess = createAction('EventHalls/deleteEventHallsSuccess')
export const deleteEventHallsError = createAction('EventHalls/deleteEventHallsError')

export const updateEventHallsRequest = createAction('EventHalls/updateEventHallsRequest')
export const updateEventHallsSuccess = createAction('EventHalls/updateEventHallsSuccess')
export const updateEventHallsError = createAction('EventHalls/updateEventHallsError')

export const idEventHall = createAction('EventHalls/find');