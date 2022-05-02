import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { Select } from "./Styled";
import { Grid } from "./Styled";
import { getLoading,getSuccess,getError } from "../Redux/actionTypes";
import {getProductsData} from '../Redux/actions'


export const Products = () => {
  const {products} = useSelector((state)=> state.products)

  // const [show, setShow] = useState({})

const dispatch = useDispatch()



  useEffect(async() => {









//   const display=async()=>{
//     try{
//       let res=await fetch(`https://movie-fake-server.herokuapp.com/products`)
//       let data=await res.json()
// // console.log(data);
// setShow(data)
//     }catch(e){console.log(e)}
  
//   }
//   display()
//  console.log(res);
    // fetch ProductsData using redux-thunk on every mount
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };



  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container"> 
        {/* iterate data and show each Product card */}

    
       
      </Grid>
    </>
  );
};
