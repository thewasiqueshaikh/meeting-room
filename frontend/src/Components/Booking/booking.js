import React from "react";
import './booking.css'
const Booking = ({ handleTimeSelector }) => {
  const arr = [
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
    "12:30PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
    "5:30PM",
    "6:00PM",
    "6:30PM",
    "7:00PM"
  ];
  return (
    <div className="size">
      {arr.map((time, idx) => {
        return (
          <button
            key={idx}
            id={idx}
            type="button"
            className="btn btn-outline-danger m-1"
            onClick={() => handleTimeSelector(time)}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default Booking;
