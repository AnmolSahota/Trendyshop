import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CartLoading from "./CartLoading";
import SingleProduct from "../Pages/SingleProduct";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/product" element={<Products />}></Route>
      <Route path="/singleProduct/:category/:id" element={<SingleProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route
        path="*"
        element={
          <h1 style={{ fontSize: "80px", textAlign: "center" }}>
            Oops!!! 😕 Page Not Found
          </h1>
        }
      ></Route>
    </Routes>
  );
}

export default MainRoutes;
