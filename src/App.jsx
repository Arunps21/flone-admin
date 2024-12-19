import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ListProduct from "./pages/ListProduct";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ProductOrders from "./pages/ProductOrders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <NavBar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<AddProduct token={token}/>} />
                <Route path="/list" element={<ListProduct />} />
                <Route path="/orders" element={<ProductOrders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
