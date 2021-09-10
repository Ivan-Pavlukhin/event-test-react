import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid'
import { eventHallsOperations } from "../../../redux/eventHallsList"

import Row from "./Row"

export default function AddEventHall() {
    const dispatch = useDispatch() 

    const [size, setSize] = useState([])
    
    const handelAddRow = (name) => () => {
        setSize(prevSize =>[...prevSize, {rowName: name, row: []}])
    }

    const handelAddPlace = (name, index) => () => {
        setSize(prevSize => prevSize.map(item => {
            if(item.rowName === index + 1){
                const newRow = [...item.row, {place: name, active: false, price: "0", sold: false}]
                return { rowName: item.rowName, row: newRow }
            }
            return item
        }))
    }

    const [city, setCity] = useState('')

    const handelCity = ({target}) => {
        setCity(target.value)
    }

    const [hall, setHall] = useState('')

    const handelHall = ({target}) => {
        setHall(target.value)
    }

    const handelSave = () => {
        dispatch(eventHallsOperations.addEvent({city, hallName: hall, size}))
    }

    return (
        <>
            <h2>Add event hall</h2>
            <label>Город
                <input type="text" onChange={handelCity} />
            </label><br />
            <label>Зал
                <input type="text" onChange={handelHall} />
            </label><br />
            {size.length > 0 && size.map((item, index) => {
                return <div key={uuidv4()}>
                    <Row row={item} handelClick={handelAddPlace} index={index}/>
                    </div>
            })}
            <button type="button" onClick={handelAddRow(size.length + 1)}>Add row</button><br />
            <button type="button" onClick={handelSave}>Save</button>
        </>
    )
}

// [...prevRow, {place: name, active: false, price: "0"}]