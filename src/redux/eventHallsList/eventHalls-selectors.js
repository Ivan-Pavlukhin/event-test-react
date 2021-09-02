import { createSelector } from '@reduxjs/toolkit'

const getEventHalls = state => state.eventHalls.eventHalls;

const getId = state => state.eventHalls.idHall;

const getViewEventHall = createSelector([getId, getEventHalls], (id, eventHalls) => {
    if (!id && !eventHalls) {
        return
    }

    const eventHall = eventHalls.filter(hall => hall._id === id)
    return eventHall[0]
})

export default {
    getEventHalls,
    getViewEventHall,
    getId
}