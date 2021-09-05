import { createSelector } from '@reduxjs/toolkit'

const getEvents = state => state.events.events;

const getId = state => state.events.idEvent;

// const getViewEventHall = createSelector([getId, getEventHalls], (id, eventHalls) => {
//     if (!id && !eventHalls) {
//         return
//     }

//     const eventHall = eventHalls.filter(hall => hall._id === id)
//     return eventHall[0]
// })

export default {
    getEvents,
    // getViewEventHall,
    getId
}