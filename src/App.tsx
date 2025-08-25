import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layouts/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Booking from "./pages/Book";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Booking />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
