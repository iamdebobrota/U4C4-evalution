import { GET_DATA, GET_ERROR, GET_LOADING } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, payload, action) => {
  switch(action){
    case GET_LOADING:
        return {
            ...state,
            isLoading: true,
            isError:false,
            filterData: [],
  products: []
        };
        case GET_DATA:
            return{
                ...state,
                isLoading: false,
                isError:false,
                filterData:action.payload,
      products: action.payload
            };
        case GET_ERROR:
            return{
                ...state,
                isLoading: false,
                isError:true,
                filterData: [],
                 products: []
            }
            default:
                return state;
}



};
export { reducer };
