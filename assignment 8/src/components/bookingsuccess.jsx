import React from "react";

const BookingSuccess = () => {
  const data = JSON.parse(localStorage.getItem("bookingData"));
  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking Confirmed ✅</h2>
      <p><strong>Booking ID:</strong> #{bookingId}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Mobile:</strong> {data.mobile}</p>
    </div>
  );
};

export default BookingSuccess;
