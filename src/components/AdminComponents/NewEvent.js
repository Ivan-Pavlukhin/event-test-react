import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventHallsOperations, eventHallsSelectors} from '../../redux/eventHallsList'

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
    // const [idHallTemplate, setIdHallTemplate] = useState('')
    // setIdHallTemplate(useSelector(eventHallsSelectors.getId))

    const [row1, setRow1] = useState({active: false, price: 0})
    const [row2, setRow2] = useState({active: false, price: 0})
    const [row3, setRow3] = useState({active: false, price: 0})
    const [row4, setRow4] = useState({active: false, price: 0})
    const [row5, setRow5] = useState({active: false, price: 0})

    const handelClickOnRow = (i) => (e) => {
        switch (i) {
            case 1:
                setRow1({price: currentPrice, active: true})
                break;
            case 2:
                setRow2({price: currentPrice, active: true})
                break;
            case 3: 
                setRow3({price: currentPrice, active: true})
                break;
            case 4: 
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
        dispatch(eventHallsOperations.addEvent())
    }
    
    return (
        <div>
            <h2>NewEvent</h2>
            {viewHall &&
                <>
                    <p>{viewHall.name}</p>
                
                <form onSubmit={handelSubmit}>
                    <label> Введи город 
                        <input type="text" onChange={handelCity}/>
                    </label>
                    <label> Введи название концертного-зала 
                        <input type="text" onChange={handelConcertHall}/>
                    </label>
                    <label> Выбери дату 
                        <input id="datetime" type="datetime-local" onChange={handelDate}></input>
                    </label>

                    <label> Выбери цену за ряд 
                        <input name="price" type="number" onChange={handelChangePrice }/>
                    </label>
                    {/* {viewHall.size.map(({row}, index) => <div>
                        <button type="button" onClick={handelClickOnRow(index + 1)}>row   <span>
                            
                             {row.map((item, index) => {
                                // item.place = index + 1
                                const name = index + 1
                                return `place: ${name}, price ${row1Price}. `
                            })}
                           </span>
                          </button>
                    </div>)} */}
                    <div>
                        <button type="button" onClick={handelClickOnRow(1)}>row   <span>
                             {viewHall.size[0].row.map((item, index) => {
                                // item.place = index + 1
                                const name = index + 1
                                return `place: ${name}, price ${row1.price}, active: ${row1.active}. `
                            })}
                           </span>
                          </button>
                    </div>    
                    <div>
                        <button type="button" onClick={handelClickOnRow(2)}>row   <span>
                             {viewHall.size[0].row.map((item, index) => {
                                // item.place = index + 1
                                const name = index + 1
                                return `place: ${name}, price ${row2.price}, active: ${row2.active}. `
                            })}
                           </span>
                          </button>
                    </div>
                    <div>
                        <button type="button" onClick={handelClickOnRow(3)}>row   <span>
                             {viewHall.size[0].row.map((item, index) => {
                                // item.place = index + 1
                                const name = index + 1
                                return `place: ${name}, price ${row3.price}, active: ${row3.active}. `
                            })}
                           </span>
                          </button>
                    </div>
                    <div>
                        <button type="button" onClick={handelClickOnRow(4)}>row   <span>
                             {viewHall.size[0].row.map((item, index) => {
                                // item.place = index + 1
                                const name = index + 1
                                return `place: ${name}, price ${row4.price}, active: ${row4.active}. `
                            })}
                           </span>
                          </button>
                    </div>
                    <div>
                        <button type="button" onClick={handelClickOnRow(5)}>row   <span>
                             {viewHall.size[0].row.map((item, index) => {
                                // item.place = index + 1
                                const name = index + 1
                                return `place: ${name}, price ${row5.price}, active: ${row5.active}. `
                            })}
                           </span>
                          </button>
                    </div>
                    <label>About event</label>
                    <textarea onChange={handelChangeAbout}></textarea>
                    <button type="submit">Add Event</button>
                    </form>
                </> }
        </div>
    )
}

