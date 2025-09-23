import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";      
import Booking from "./Booking";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
