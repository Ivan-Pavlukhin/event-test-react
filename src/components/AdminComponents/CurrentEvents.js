import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { eventsOperations, eventsSelectors } from "../../redux/events"

export default function Analytics() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventsOperations.fetchEvents())
    },[])
    
    const events = useSelector(eventsSelectors.getEvents)
    return (
        <>
            <h2>CurrentEvents</h2>
            <ul>
                {events.map(event => <li key={event._id}>
                    <span>Название мероприятия: {event.name}</span><br />
                    <span>Город проведения: {event.city}</span><br />
                    <span>Дата проведения: {event.dateEvent}</span><br />
                    <span>Название концертного зала: {event.hallName}</span><br />
                    <span>Статус мероприятия: {event.active?'активно':'не активно'}</span><br />
                    <span>О мероприятие: {event.aboutEvent}</span><br />
                    
                </li> )}
            </ul>
        </>
    )
}