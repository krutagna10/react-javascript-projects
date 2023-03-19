import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Locations from "./components/Locations";
import About from "./components/About";

const NavBar = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <Link to="/">Home</Link>
            </th>
            <th>
              <Link to="/about">About</Link>
            </th>
            <th>
              <Link to="/content">Out Content</Link>
            </th>
            <th>
              <Link to="/locations">Locations</Link>
            </th>
            <th>
              <Link to="/contact">Contact Us</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/content" element={<Content />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NavBar;
