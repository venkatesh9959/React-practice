import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
