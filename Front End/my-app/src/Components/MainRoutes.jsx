import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SingleProduct from "../Pages/SingleProduct";
import AdminLogin from "../Admin/Pages/AdminLogin";
import Dashboard from "../Admin/Pages/Dashboard";
import Userdetails from "../Admin/Pages/Userdetails";
import Editproudct from "../Admin/Pages/Editproudct";
import Allproduct from "../Admin/Pages/Allproduct";
import Singleprodcutedit from "../Admin/Pages/Singleprodcutedit";
import AdminPrivateroute from "../Admin/Privateroute/AdminPrivateroute";
import Thankyou from "../Pages/ThankYou";



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

       {/* Admin */}
      
        <Route path='/adminlogin' element={<AdminLogin />}/> 
        <Route path='/dashboard' element={ <AdminPrivateroute> <Dashboard /></AdminPrivateroute>}/> 
        <Route path='/dashboard/userdetails' element={<AdminPrivateroute> <Userdetails /></AdminPrivateroute>}/>
        <Route path='/dashboard/editproduct' element={<AdminPrivateroute> <Editproudct /></AdminPrivateroute>}/>
        <Route path='/dashboard/allproducts' element={<AdminPrivateroute> <Allproduct /></AdminPrivateroute>}/>
        <Route path='/dashboard/singleproductedit/:id' element={<AdminPrivateroute><Singleprodcutedit /></AdminPrivateroute>} />
        <Route path='/Thankyou' element={<Thankyou />}/> 
         
      {/*  */}
    </Routes>
  );
}

export default MainRoutes;
