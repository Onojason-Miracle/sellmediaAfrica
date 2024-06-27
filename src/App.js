import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./css/App.css";
import "./css/responsive.css";

function App() {
  return (
    <div>
            <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="homepage" element={<Home />} />

          

         

          

          {/* <Route path="*" element={<Nopage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
