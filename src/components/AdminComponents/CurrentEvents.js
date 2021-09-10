import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { eventsOperations, eventsSelectors, idEvent } from "../../redux/events"

export default function CurrentEvents({link}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(eventsOperations.fetchEvents())
    },[dispatch])
    
    const handelClick = (id) => () =>{
        if(!id){
            return
        }
        dispatch(idEvent(id))
    }

    const events = useSelector(eventsSelectors.getEvents)
    return (
        <>
            <h2>CurrentEvents</h2>
            <p>Выбери мероприятие чтобы просмотреть его и изменить</p>
            <ul>
                {events.map(event => <li key={event._id}>
                    <Link
                    onClick={handelClick(event._id)}
                    to={{
                        pathname: link,
                        }} >
                    <span>Название мероприятия: {event.eventName}</span><br />
                    <span>Город проведения: {event.city}</span><br />
                    <span>Дата проведения: {event.dateEvent}</span><br />
                    <span>Название концертного зала: {event.hallName}</span><br />
                    <span>Статус мероприятия: {event.active?'активно':'не активно'}</span><br />
                    <span>О мероприятие: {event.aboutEvent}</span><br />
                    </Link>
                </li> )}
            </ul>
        </>
    )
}