import { createSelector } from '@reduxjs/toolkit'

const getEvents = state => state.events.events;

const getId = state => state.events.idEvent;

const getChangeEvent = createSelector([getId, getEvents], (id, events) => {
    if (!id && !events) {
        return
    }

    const [changeEvent] = events.filter(event => event._id === id)
    return changeEvent
})

export default {
    getEvents,
    getChangeEvent,
    getId
}