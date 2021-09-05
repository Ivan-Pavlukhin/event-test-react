import { useState } from "react";

export default function Place({place, price, rowName}) {
    const [newPrice, setNewPrice] = useState(0)
    const [status, setStatus] = useState(false)

    const handelClick = ({ target }) => {
        setNewPrice(price)
        setStatus(!status)

    }

    return (<button type="button" onClick={handelClick}>
            <span>Place {place.place}: price: {newPrice},</span><br />
        <span>R: { rowName} status: {status ? 'active' : 'not active'}.</span>

    </button>)
}