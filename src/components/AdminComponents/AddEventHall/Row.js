
import { v4 as uuidv4 } from 'uuid'

export default function Row({ row, handelClick, index }) {

    return (<> Row {row.rowName}
        {row && row.row.length > 0 && row.row.map(place => 
        <span key={uuidv4()}>Place: {place.place}.
         </span>)}<br/>
        <button type="button" 
                onClick={handelClick(row.row.length + 1, index)}>
            Add place
        </button> 
    </>)
}