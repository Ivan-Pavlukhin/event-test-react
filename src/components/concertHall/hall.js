import Row from "../concertHall/Row";

export default function Hall({event, price, handelClickPlace}) {
    return (
        <>
        {event.map((item, index) => (
            <div key={item.rowName}>
              <Row
                row={item}
                price={price}
                handelClickPlace={handelClickPlace}
                iRow={index}
              />
            </div>
          ))}
          </>
    )
}