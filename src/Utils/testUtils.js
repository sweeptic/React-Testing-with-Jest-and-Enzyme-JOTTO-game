

//reducers from the app settings
import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../configureStore'



export const storeFactory = (initialState) => {
   const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
   // return createStore(rootReducer, initialState);
   return createStoreWithMiddleware(rootReducer, initialState);
}