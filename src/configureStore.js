import rootReducer from './reducers/index';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);
