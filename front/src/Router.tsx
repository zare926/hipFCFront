import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
