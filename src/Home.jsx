import { useState } from "react";
import "./index.css";

function App() {
  const [activeSlide, setActiveSlide] = useState(null);

  const venues = [
    { img: "/images/venue1.png", info: "City Center | 5000 sq.ft | Luxurious Decor" },
    { img: "/images/venue2.png", info: "Riverside | 6000 sq.ft | Waterfront View" },
    { img: "/images/venue3.png", info: "Uptown | 4000 sq.ft | Modern Architecture" },
    { img: "/images/venue4.png", info: "Suburb | 5500 sq.ft | Garden View" },
    { img: "/images/venue5.png", info: "Beachside | 7000 sq.ft | Oceanfront" }
  ];

  return (
    <>
      <header>
        <nav>
          <div className="logo">VINAYA BANQUET</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#venues">Venues</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/booking">Book Now</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <section id="home" className="hero">
          <h1>Welcome to Vinaya Banquet</h1>
          <p>Celebrate your special moments with us!</p>
          <button onClick={() => (window.location.href = "/booking")}>Book Now</button>
        </section>
      </header>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Vinaya Banquet is a premium venue for weddings, parties, and corporate
          events. Celebrate your moments in style and comfort.
        </p>
        <img src="/images/about2.png" alt="About Vinaya Banquet" />
      </section>

      {/* ✅ Venues Section with toggle */}
<section id="venues" className="gallery">
  <h2>Venues</h2>
  <div className="venue-slider">
    {venues.map((venue, index) => (
      <div
        className="slide"
        key={index}
        onClick={() =>
          setActiveSlide(activeSlide === index ? null : index)
        }
        style={{ cursor: "pointer", position: "relative" }}
      >
        <img src={venue.img} alt={`Venue ${index + 1}`} />

        {activeSlide === index && <div className="info-popup">{venue.info}</div>}

      </div>
    ))}
  </div>
</section>


      <section id="services" className="services">
        <h2>Services We Offer</h2>

        <div className="service left">
          <img src="/images/wedding.png" alt="Wedding" />
          <div>
            <h3>Weddings</h3>
            <p>
              Make your special day unforgettable with our elegant wedding
              setups…
            </p>
          </div>
        </div>

        <div className="service right">
          <img src="/images/birthday.png" alt="Birthday Celebrations" />
          <div>
            <h3>Birthday Celebrations</h3>
            <p>
              Throw memorable birthday parties for your loved ones…
            </p>
          </div>
        </div>

        <div className="service left">
          <img src="/images/corporate.png" alt="Corporate Events" />
          <div>
            <h3>Corporate Events</h3>
            <p>
              Host professional meetings, conferences, and team-building
              events…
            </p>
          </div>
        </div>

        <div className="service right">
          <img src="/images/social.png" alt="Social Gatherings" />
          <div>
            <h3>Social Gatherings</h3>
            <p>
              Celebrate anniversaries, reunions, or any special occasions with
              us…
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@vinayabanquet.com | Phone: +123 456 7890</p>
      </section>

      <footer>
        <p>&copy; 2025 Vinaya Banquet. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
