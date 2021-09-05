import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventHallsOperations, eventHallsSelectors} from '../../redux/eventHallsList'
import { eventsOperations } from '../../redux/events';
import Row from '../concertHall/Row';

export default function Analytics(props) {
    const dispatch = useDispatch()

    const [currentPrice, setCurrentPrice] = useState(0)
    const [date, setDate] = useState(null)
    const handelDate = ({ target }) => {
        setDate(target.value)
    }
    const [city, setCity] = useState('')
    const handelCity = ({ target }) => {
        setCity(target.value)
    }
    const [eventName, setEventName] = useState('')
    const handelEventName = ({ target }) => {
        setEventName(target.value)
    }
    const [concertHall, setConcertHall] = useState('')
    const handelConcertHall = ({ target }) => {
        setConcertHall(target.value)
    }

    const viewHall = useSelector(eventHallsSelectors.getViewEventHall)
    const handelChangePrice = ({target}) => {
        setCurrentPrice(target.value)
    }

    const [about, setAbout] = useState('')

    const handelChangeAbout = ({ target }) => {
        setAbout(target.value)
    }

    const [eventStatus, setEventStatus] = useState(false)
    const handelEventStatus = () => {
        setEventStatus(!eventStatus)
    }
    // const [idHallTemplate, setIdHallTemplate] = useState('')
    // setIdHallTemplate(useSelector(eventHallsSelectors.getId))

    const [row1, setRow1] = useState({active: false, price: 0})
    const [row2, setRow2] = useState({active: false, price: 0})
    const [row3, setRow3] = useState({active: false, price: 0})
    const [row4, setRow4] = useState({active: false, price: 0})
    const [row5, setRow5] = useState({active: false, price: 0})



    const handelClickOnRow = (i) => (e) => {
        switch (i) {
            case 0:
                setRow1({price: currentPrice, active: true})
                break;
            case 1:
                setRow2({price: currentPrice, active: true})
                break;
            case 2: 
                setRow3({price: currentPrice, active: true})
                break;
            case 3: 
                setRow4({price: currentPrice, active: true})
                break;
            case 5: 
                setRow5({price: currentPrice, active: true})
                break;
            default:
                break;
        } 
    }



    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(eventsOperations.addEvent({eventStatus, date, city, eventName, concertHall, about, row1, row2, row3, row4}))
    }
    
    return (
        <div>
            <h2>NewEvent</h2>
            {viewHall &&
                <>
                    <p>{viewHall.name}</p>
                
                <form onSubmit={handelSubmit}>
                    <label> Введи город 
                        <input type="text" name="city" onChange={handelCity}/>
                    </label>
                    <label> Введи название концертного-зала 
                        <input type="text" name="hallName" onChange={handelConcertHall}/>
                    </label>
                    <label> Введи название концерта 
                        <input type="text" name="eventName" onChange={handelEventName}/>
                    </label>
                    <label> выбери статус концерта.
                        <input type="checkbox" name="eventStatus" onChange={handelEventStatus} checked={eventStatus} />
                    </label>
                    <label> Выбери дату 
                        <input id="datetime" name="dateEvent" type="datetime-local" onChange={handelDate}></input>
                    </label>

                    <label> Выбери цену за место 
                        <input name="price" type="number" onChange={handelChangePrice }/>
                    </label>
                    {viewHall.size[0].hall.map((item, index) =>
                        <div key={item.rowName}>
                            <Row row={item} price={currentPrice} />
                        </div>
                    )}
                    <label>About event</label>
                    <textarea onChange={handelChangeAbout}></textarea>
                    <button type="submit">Add Event</button>
                    </form>
                </> }
        </div>
    )
}

