import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[svw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productID" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
