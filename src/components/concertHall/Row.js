import { useEffect, useState } from "react"
import Place from "./Place"



export default function Raw({ row, name, price }) {
    const [active, setActive] = useState(false)

    return (
        <>
            <span>Row {row.rowName}:</span>
            {row.row.map((item, index) =>
                <span key={item.place} >
                    <Place price={price} place={item} rowName={row.rowName}/>
                </span>
            )}
        </>
    )
}