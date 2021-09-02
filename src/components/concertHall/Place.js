import { useState } from "react";

export default function Place() {
    const [active, setActive] = useState(false)
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('')

    return (<>
        <span>name: {name}, price: {price}, active: {active}</span>
    </>)
}