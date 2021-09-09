import { useEffect, useState } from "react";

export default function Place({
  iRow,
  place,
  price,
  rowName,
  handelClickPlace,
  iPlace,
}) {
  return (
    <button type="button" onClick={handelClickPlace(iRow, iPlace)}>
      <span>
        Place {place.place}: price: {place.price}
      </span>
      <br />
      <span>
        R: {rowName} status: {place.active ? "active" : "no active"}.
      </span>
    </button>
  );
}
