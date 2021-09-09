import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useHistory} from "react-router-dom"

import { eventsOperations, eventsSelectors } from "../../redux/events"
import Hall from "../concertHall/Hall"

export default function ChangeEvent() {
    
    const changeEvent = useSelector(eventsSelectors.getChangeEvent)
    
    const [event, setEvent] = useState(changeEvent.size);

  const handelClickPlace = (row, place) => () => {
    setEvent(
      event.map((item, index) => {
        if (row === index) {
          const row = item.row.map((item, index) => {
            if (index === place) {
              const price = currentPrice;
              const active = !item.active;
              return { ...item, price, active };
            }
            return item;
          });
          return { ...item, row };
        }

        return item;
      })
    );
  };
  
  const dispatch = useDispatch();

  const [currentPrice, setCurrentPrice] = useState(0);
  const [date, setDate] = useState(changeEvent.dateEvent);
  const handelDate = ({ target }) => {
    setDate(target.value);
  };
  const [city, setCity] = useState(changeEvent.city);
  const handelCity = ({ target }) => {
    setCity(target.value);
  };
  const [eventName, setEventName] = useState(changeEvent.eventName);
  const handelEventName = ({ target }) => {
    setEventName(target.value);
  };
  const [concertHall, setConcertHall] = useState(changeEvent.hallName);
  const handelConcertHall = ({ target }) => {
    setConcertHall(target.value);
  };

  const handelChangePrice = ({ target }) => {
    setCurrentPrice(target.value);
  };

  const [about, setAbout] = useState(changeEvent.aboutEvent);

  const handelChangeAbout = ({ target }) => {
    setAbout(target.value);
  };

  const [eventStatus, setEventStatus] = useState(changeEvent.active);
  const handelEventStatus = () => {
    setEventStatus(!eventStatus);
  };

  const history = useHistory()
// TODO разобраться с ошибкой при отправке формы
  const handelSubmit = (e) => {
      e.preventDefault();
        history.push('/admin/currentEvent')   
      dispatch(
          eventsOperations.updateEvent({
            id: changeEvent._id,
            eventStatus,
            date,
            city,
            eventName,
            concertHall,
            about,
            size: event,
          })
      )

  }


    return(
        <div>
            <h2>Change event</h2>
            {/* <NewEvent changeEvent={event} /> */}
            {event && (
                <>
                <p>{event.name}</p>

                <form onSubmit={handelSubmit}>
                    <label>
                    {" "}
                    Введи город
                    <input type="text" value={city} name="city" onChange={handelCity} />
                    </label>
                    <label>
                    {" "}
                    Введи название концертного-зала
                    <input type="text" value={concertHall} name="hallName" onChange={handelConcertHall} />
                    </label>
                    <label>
                    {" "}
                    Введи название концерта
                    <input type="text" value={eventName} name="eventName" onChange={handelEventName} />
                    </label>
                    <label>
                    {" "}
                    выбери статус концерта.
                    <input
                        type="checkbox"
                        name="eventStatus"
                        onChange={handelEventStatus}
                        checked={eventStatus}
                    />
                    </label>
                    <label>
                    {" "}
                    Выбери дату
                    <input
                        id="datetime"
                        value={date}
                        name="dateEvent"
                        type="datetime-local"
                        onChange={handelDate}
                    ></input>
                    </label>

                    <label>
                    {" "}
                    Выбери цену за место
                    <input name="price" type="number" onChange={handelChangePrice} />
                    </label>
                    <Hall event={event} price={currentPrice} handelClickPlace={handelClickPlace}/>
                    <label>About event</label>
                    <textarea onChange={handelChangeAbout} value={about}></textarea>
                    <button type="submit">Add Event</button>
                </form>
                </>
            )}
        </div>
  );
        
    
}