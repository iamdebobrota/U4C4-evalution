import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

const MainRoutes = () => {
  return( <>{/* Navbar and all the routes */}
   <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
     <Route exact path='/products' element={<Products/>}/>
     {/* <Route exact path='/products/:id' element={<ProductCard/>}/> */}


      </Routes>
  
  </>
  )
};
export { MainRoutes };
