import rootReducer from './reducers/index';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// export default createStore(rootReducer);
// export default applyMiddleware(...middlewares)(createStore)(rootReducer);
export default createStoreWithMiddleware(rootReducer);
