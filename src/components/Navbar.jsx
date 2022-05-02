import About from "./About";
import {Link } from 'react-router-dom'

import Home from "./Home";
import { ProductCard } from "./ProductCard";
import { Products } from "./Products";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20,
    fontSize:"25px",
    display:"flex",gap:"30px", justifyContent:"center",
    color:"white", fontWeight:"600"
    }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
<Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link>
<Link to="/about" style={{textDecoration:"none", color:"white"}}>About</Link>
<Link to="/products" style={{textDecoration:"none", color:"white"}}>Products</Link>
<Link to="/products/men" style={{textDecoration:"none", color:"white"}}>men</Link>
<Link to="/products/women" style={{textDecoration:"none", color:"white"}}>Women</Link>
<Link to="/products/kids" style={{textDecoration:"none", color:"white"}}>Kids</Link>
<Link to="/products/homedecor" style={{textDecoration:"none", color:"white"}}>Home decor</Link>



    </nav>
  );
};
