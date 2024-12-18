import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ListProduct from "./pages/ListProduct";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <>
          <NavBar />
          <hr />
          <div className="flex w-full">
            <SideBar />
          </div>
        </>
      </div>
      <Routes>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/list" element={<ListProduct />} />
      </Routes>
    </>
  );
};

export default App;
