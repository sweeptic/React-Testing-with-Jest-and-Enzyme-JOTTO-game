

//reducers from the app settings
import rootReducer from '../reducers'
import { createStore } from 'redux'

export const storeFactory = initialState => createStore(rootReducer, initialState) 