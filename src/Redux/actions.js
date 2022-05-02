// use axios for api call
import axios from "axios";
import { getError, getLoading, getSuccess } from "./actionTypes";

const getProductsData=()=>(dispatch)=> {

   
        //its calld midileware
       
        let res=axios.get(`https://movie-fake-server.herokuapp.com/products`)
        .then((res)=> res.json())
        .then((res)=> dispatch(getSuccess(res)))
       .catch((e)=> dispatch(getError(e)))

}

const sortProducts = () => {

};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
