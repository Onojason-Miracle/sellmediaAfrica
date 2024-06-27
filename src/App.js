import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./css/App.css";
import "./css/responsive.css";
import Success from "./components/success";
import Nopage from "./components/nopage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="homepage" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
