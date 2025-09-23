
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection (local)
mongoose.connect("mongodb://localhost:27017/banquetbooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  time: String,
  guests: Number,
  venue: String,
  notes: String,
  paymentStatus: { type: String, default: "Pending" }, // optional
});

const Booking = mongoose.model("Booking", bookingSchema);

// API: Save booking
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: Get all bookings (optional for admin dashboard)
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
