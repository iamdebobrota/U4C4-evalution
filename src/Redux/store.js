// create store here
import {applyMiddleware,
   compose, 
   combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import {reducer} from "./reducer"



const rootReducer=combineReducers({
  products: reducer
})


const ownThunk=(store)=>(next)=>(action)=>{
  // console.log("type of action", typeof action);
if(typeof action ==="function"){
 return action(store.dispatch);
}
  next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
      );





export const store =createStore(rootReducer,enhancer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
