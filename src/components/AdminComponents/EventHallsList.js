import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { eventHallsSelectors, eventHallsOperations, idEventHall } from '../../redux/eventHallsList'

export default function EventHallsList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(eventHallsOperations.fetchEventHalls())
    }, [dispatch])

    const handelClick = (id) => () => {
        dispatch(idEventHall(id))
    }
    
    const loading = useSelector(eventHallsSelectors.getLoading)

    const eventsHalls = useSelector(eventHallsSelectors.getEventHalls) 

    return (
        <div>
            <h2>Event Halls List</h2>
            {loading && <h2>Идёт загрузка...</h2>}
            <ul>
                {eventsHalls.map(item => <li key={item._id}>
                    <Link
                        onClick={handelClick(item._id)}
                        to={{
                        pathname: "/admin/newEvent",
                        state: {id: item._id}
                    }}>Название зала: {item.name}
                        <ul>
                            <li>Город: {item.city}</li>
                            {item.phone && <li>Телефон: {item.phone}</li>}
                        </ul>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}