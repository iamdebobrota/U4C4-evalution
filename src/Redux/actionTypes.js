export const GET_DATA="GET_DATA"
export const GET_LOADING="GET_LODING"
export const GET_ERROR="GET_ERROR"


export const  getLoading=()=>({
    type: GET_LOADING
});
export const  getSuccess=(payload)=>({
    type:GET_DATA,
    payload
});
export const  getError=()=>({
    type:GET_ERROR
});
