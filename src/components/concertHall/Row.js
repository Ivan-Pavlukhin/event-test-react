// import { useEffect, useState } from "react";
import Place from "./Place";

export default function Raw({ row, price, handelClickPlace, iRow }) {
  return (
    <>
      <span>Row {row.rowName}:</span>
      {row.row.map((item, index) => (
        <span key={item.place}>
          <Place
            index={index}
            price={price}
            place={item}
            rowName={row.rowName}
            handelClickPlace={handelClickPlace}
            iRow={iRow}
            iPlace={index}
          />
        </span>
      ))}
    </>
  );
}
