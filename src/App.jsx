import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { wrapperStyle } from "./styles.jsx";
import { Home, Aperture, ShutterSpeed, ISO, About } from "./pages.jsx";
import Navigation from "./navigation.jsx";

import "./title.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div style={wrapperStyle.wrapper}>
        <Navigation />

        <div className="title">
          <h1>Работаем с камерой и светом</h1>
        </div>

        <Routes>
          <Route exact path="/aperture" element={<Aperture />} />
          <Route exact path="/shutterspeed" element={<ShutterSpeed />} />
          <Route exact path="/iso" element={<ISO />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
