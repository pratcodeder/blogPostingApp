

import Header from "./components/Header/";
import Login from "./components/Login/";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";
import * as React from "react";
function App() {
  return (
    <div >
       <Routes>      

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </div>
  );
}

export default App;