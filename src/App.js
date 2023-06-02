import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Location from "./pages/Location";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  let basename = "/";

  return (
    <BrowserRouter basename={basename}>

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Location/:id" element={<Location />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default App;