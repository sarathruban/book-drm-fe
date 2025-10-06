import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Library from "../pages/Library";
import Books from "../pages/Books";
import { BOOKS_LIST } from "./appUrls";
import IndividualBooks from "../pages/IndividualBook";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Library />} />
          <Route path={BOOKS_LIST} element={<Books />} /> 
          <Route path={`books/:id`} element={<IndividualBooks />} />
        </Route>

        {/* Optional standalone routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
