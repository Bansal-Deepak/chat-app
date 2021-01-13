// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// // here we are importing index.js(root-reducer).
// // you dont have to specify the file name .it will automatically pick up from the folder
// import rootReducer from "./reducers";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// here we are importing index.js(root-reducer).
// you dont have to specify the file name .it will automatically pick up from the folder
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
