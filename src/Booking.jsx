import { useState } from "react";
import axios from "axios"; // 👈 for sending data to backend
import "./index.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    venue: "city-center",
    notes: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmation = window.confirm("Are you sure you want to book?");
    if (!confirmation) return;

    try {
      // Send data to backend API
      await axios.post("http://localhost:5000/api/bookings", formData);
      

      alert("✅ Booking saved successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        venue: "city-center",
        notes: "",
      });
    } catch (err) {
      console.error("Booking error:", err);
      alert("❌ Failed to save booking. Please try again.");
    }
  };

  

  return (
    <>
      <header>
        <nav>
          <div className="logo">VINAYA BANQUET</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#venues">Venues</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/booking">Book Now</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="booking">
        <h2>Book Your Event</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="date">Event Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

          <label htmlFor="time">Event Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} required />

          <label htmlFor="venue">Select Venue:</label>
          <select id="venue" name="venue" value={formData.venue} onChange={handleChange}>
            <option value="city-center">City Center</option>
            <option value="riverside">Riverside</option>
            <option value="uptown">Uptown</option>
            <option value="suburb">Suburb</option>
            <option value="beachside">Beachside</option>
          </select>

          <label htmlFor="notes">Additional Notes:</label>
          <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange}></textarea>

          <button type="submit">Confirm Booking</button>
        </form>
      </section>

      <footer>
        <p> 2025 Vinaya Banquet 🤍 All rights reserved .</p>
      </footer>
    </>
  );
}

export default Booking;
