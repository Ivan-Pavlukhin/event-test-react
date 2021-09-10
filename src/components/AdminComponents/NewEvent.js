import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventHallsSelectors } from "../../redux/eventHallsList";
import { eventsOperations } from "../../redux/events";
import Hall from "../concertHall/Hall";


export default function NewEvent({changeEvent}) {
  const viewHall = useSelector(eventHallsSelectors.getViewEventHall);
  // console.log(viewHall)
  const [event, setEvent] = useState(viewHall.size);

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
  const [date, setDate] = useState(null);
  const handelDate = ({ target }) => {
    setDate(target.value);
  };
  const [city, setCity] = useState(viewHall.city);
  const handelCity = ({ target }) => {
    setCity(target.value);
  };
  const [eventName, setEventName] = useState("");
  const handelEventName = ({ target }) => {
    setEventName(target.value);
  };
  const [concertHall, setConcertHall] = useState(viewHall.hallName);
  const handelConcertHall = ({ target }) => {
    setConcertHall(target.value);
  };

  const handelChangePrice = ({ target }) => {
    setCurrentPrice(target.value);
  };

  const [about, setAbout] = useState("");

  const handelChangeAbout = ({ target }) => {
    setAbout(target.value);
  };

  const [eventStatus, setEventStatus] = useState(false);
  const handelEventStatus = () => {
    setEventStatus(!eventStatus);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      eventsOperations.addEvent({
        eventStatus,
        date,
        city,
        eventName,
        concertHall,
        about,
        size: event,
      })
    );
  };

  return (
    <div>
      <h2>NewEvent</h2>
      {viewHall && (
        <>
          <p>{viewHall.name}</p>

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
              <input type="text" name="eventName" onChange={handelEventName} />
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
            <textarea onChange={handelChangeAbout}></textarea>
            <button type="submit">Add Event</button>
          </form>
        </>
      )}
    </div>
  );
}
