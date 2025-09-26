import { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    venue: "city-center",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to book?")) return;

    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("✅ Booking saved successfully!");
      setFormData({ name:"", email:"", date:"", time:"", guests:"", venue:"city-center", notes:"" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save booking. Please try again.");
    }
  };

  return (
    <>
      <section className="booking">
        <h2>Book Your Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Your Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Your Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Event Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />

          <label>Event Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />

          <label>Number of Guests:</label>
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />

          <label>Select Venue:</label>
          <select name="venue" value={formData.venue} onChange={handleChange}>
            <option value="city-center">City Center</option>
            <option value="riverside">Riverside</option>
            <option value="uptown">Uptown</option>
            <option value="suburb">Suburb</option>
            <option value="beachside">Beachside</option>
          </select>

          <label>Additional Notes:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>

          <button type="submit">Confirm Booking</button>
        </form>
      </section>

      <footer>
        <p>2025 Vinaya Banquet 🤍 All rights reserved.</p>
      </footer>
    </>
  );
}
