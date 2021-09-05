import { createAction } from "@reduxjs/toolkit"

export const fetchEventsRequest = createAction('Events/fetchEventsRequest')
export const fetchEventsSuccess = createAction('Events/fetchEventsSuccess')
export const fetchEventsError = createAction('Events/fetchEventsError')

export const addEventRequest = createAction('Events/addEventsRequest')
export const addEventSuccess = createAction('Events/addEventsSuccess')
export const addEventError = createAction('Events/addEventsError')

export const deleteEventsRequest = createAction('Events/deleteEventsRequest')
export const deleteEventsSuccess = createAction('Events/deleteEventsSuccess')
export const deleteEventsError = createAction('Events/deleteEventsError')

export const updateEventsRequest = createAction('Events/updateEventsRequest')
export const updateEventsSuccess = createAction('Events/updateEventsSuccess')
export const updateEventsError = createAction('Events/updateEventsError')

// export const idEvent = createAction('Events/find');