import React from 'react'
import Home from "./pages/Home";
import CardDetail from "./pages/CardDetail";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card-detail/:id" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
