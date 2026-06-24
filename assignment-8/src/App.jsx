import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/movielist";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/bookingform";
import BookingSuccess from "./components/bookingsuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
